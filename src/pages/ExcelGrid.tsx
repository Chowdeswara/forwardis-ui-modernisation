import React, { useEffect, useState } from 'react';
import { CopyPlus, SkipBack, SkipForward, Plus, Trash2,FolderDown, FolderUp  } from 'lucide-react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { AppLayout } from '@/components/AppLayout';
import { Breadcrumb } from '@/components/Breadcrumb';

const initialData = [
  { id: 1, P1: 736, P2: 1400, P3: 1647, P4: 1504, P5: 1063, P6: 545, Demand: 18 },
  { id: 2, P1: 1011, P2: 674, P3: 197, P4: 1556, P5: 1478, P6: 1400, Demand: 29 },
  { id: 3, P1: 1349, P2: 791, P3: 156, P4: 1608, P5: 1530, P6: 1660, Demand: 15 },
];

const ExcelGrid = () => {
  const [data, setData] = useState(initialData);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [filter, setFilter] = useState('');
  const [goToRowIndex, setGoToRowIndex] = useState('');
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const breadcrumbItems = [
    { label: 'Home', href: '/dashboard', active: false },
    { label: 'Quick Search', active: true }
  ];
  const columns = data.length ? Object.keys(data[0]).filter(k => k !== 'id') : [];

  const handleEdit = (id: number, key: string, value: string) => {
    console.log("ID = ",id)
    console.log("kEY = ",[key])
    console.log("VALUE = ",value)
    setData(prev =>
      prev.map(row => (row.id === id ? { ...row, [key]: value } : row))
    );
    setData(prev =>
      prev.map(row => ((row.id === id && (key=='Unit Price' || key=='Shipping Cost' )) ? { ...row, ['Total Cost']: parseFloat(row['Unit Price'])+parseFloat(row['Shipping Cost']) } : row))
    );
    setData(prev =>
      prev.map(row => ((row.id === id && (key=='Unit Price' || key=='Shipping Cost' )) ? { ...row, ['Profit']: parseFloat(row['Approved'])-parseFloat(row['Total Cost']) } : row))
    );
     // If editing the last row, and value is not empty, add a new row
    const isLastRow = data[data.length - 1]?.id === id;
    if (isLastRow && value.trim() !== '') {
      const newRow: any = { id: Date.now() };
      const allColumns = Object.keys(data[0]).filter(k => k !== 'id');
      allColumns.forEach(col => {
        newRow[col] = '';
      });
      setData(prev => [...prev, newRow]);
    }
  };

  const handleAddRow = () => {
    const newRow: any = { id: Date.now() };
    columns.forEach(col => (newRow[col] = ''));
    setData(prev => [...prev, newRow]);
  };

  const handleDeleteRow = () => {
    if (selectedRow !== null) {
      setData(prev => prev.filter((_, i) => i !== selectedRow));
      setSelectedRow(null);
    }
  };

  const handleCopyPaste = () => {
    if (selectedRow !== null) {
      const original = data[selectedRow];
      const copied = { ...original, id: Date.now() };
      setData(prev => [...prev, copied]);
    }
  };

  const handleExport = () => {
    const exportData = data.map(({ id, ...rest }) => rest);
    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'GridData');
    const buf = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([buf]), 'grid_data.xlsx');
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = evt => {
      const wb = XLSX.read(evt.target.result as ArrayBuffer, { type: 'array' });
      const ws = wb.Sheets[wb.SheetNames[0]];
      const imported = XLSX.utils.sheet_to_json(ws, { defval: "" });
      const importedData = imported.map((row: any) => ({
        ...row,
        id: Date.now() + Math.random(),
      }));
      setData(importedData);
    };
    reader.readAsArrayBuffer(file);
    handleAddRow();
  };

  const handleGoToRow = () => {
    const index1 = parseInt(goToRowIndex);
    if (!isNaN(index1) && index1 >= 1 && index1 <= data.length) {
      const idx = index1 - 1;
      setSelectedRow(idx);
      document.getElementById(`row-${idx}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      alert('Invalid row number');
    }
  };

  const filteredData = data.filter(row =>
    Object.values(row).some(val =>
      val.toString().toLowerCase().includes(filter.toLowerCase())
    )
  );

  const sortData = (key: string) => {
    setData(prev => [...prev].sort((a, b) => (a[key] > b[key] ? 1 : -1)));
  };
  const Tooltip = ({ text, children }) => (
    <div className="relative group inline-block">
      {children}
      <div className="absolute z-10 hidden group-hover:block bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded shadow-lg whitespace-nowrap">
        {text}
      </div>
    </div>
  );
   useEffect(() => {
    handleAddRow();
  }, [])

  return (
    <AppLayout>
       {/* Breadcrumb */}
       <div className="hidden md:block">
            <Breadcrumb items={breadcrumbItems} />
        </div>
    <div className="p-4 space-y-4">
      {/* Controls */}
      <div className="flex flex-wrap justify-between items-center gap-2">

      <div className="flex flex-wrap gap-4 items-center">
        <input
          type="number"
          min="1"
          value={goToRowIndex}
          onChange={e => setGoToRowIndex(e.target.value)}
          placeholder="Go to row..."
          className="border rounded px-2 py-1 text-sm w-24"
        />
        <Tooltip text="Go to specified row">
          <button onClick={handleGoToRow} className="btn border border-gray-300 p-2 rounded-md hover:bg-gray-100 shadow-sm text-gray-500" >Go</button>
        </Tooltip>
        <Tooltip text="Add new row at last">
          <button onClick={handleAddRow} className="btn border border-gray-300 p-2 rounded-md hover:bg-gray-100 shadow-sm text-gray-500"><Plus /></button>
        </Tooltip>
        <Tooltip text="Delete selected row">
          <button onClick={handleDeleteRow} className="btn border border-gray-300 p-2 rounded-md hover:bg-gray-100 shadow-sm text-gray-500" ><Trash2 /></button>
        </Tooltip>
        <Tooltip text="Copy & paste selected row at last">
          <button onClick={handleCopyPaste} className="btn border border-gray-300 p-2 rounded-md hover:bg-gray-100 shadow-sm text-gray-500" ><CopyPlus /></button>
        </Tooltip>
        <Tooltip text="Go to first row">
          <button onClick={() => setSelectedRow(0)} className="btn border border-gray-300 p-2 rounded-md hover:bg-gray-100 shadow-sm text-gray-500" ><SkipBack /></button>
        </Tooltip>
        <Tooltip text="Go to last row">
          <button onClick={() => setSelectedRow(data.length - 1)} className="btn border border-gray-300 p-2 rounded-md hover:bg-gray-100 shadow-sm text-gray-500" title=""><SkipForward /></button>
        </Tooltip>
      </div>
      <div className="flex gap-2 items-center">     
      {/* <Tooltip text="Export the search result to xls file"> */}
          <button onClick={handleExport} className="btn border border-gray-300 p-2 rounded-md hover:bg-gray-100 shadow-sm text-gray-500"><FolderUp /></button>
      {/* </Tooltip> */}
      {/* <Tooltip text="Import data from xls file"> */}
          <label className="btn cursor-pointer text-blue-500">
            <FolderDown /><input type="file" onChange={handleImport} className="hidden" />
          </label>
          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-2 py-1 text-sm shrink"
            onChange={e => setFilter(e.target.value)}
            />
      {/* </Tooltip> */}
        </div>
      </div>

      {/* Table View */}
      <div className="overflow-auto rounded shadow border">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="p-3 border-b"><input type="checkbox" disabled /></th>
              <th className="p-3 border-b">No.</th>
              {columns.map(col => (
                <th key={col} onClick={() => sortData(col)} className="p-3 border-b cursor-pointer">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr
                key={row.id}
                id={`row-${idx}`}
                className={`transition ${selectedRow === idx ? 'bg-blue-100' : 'hover:bg-blue-50'}`}
                onClick={() => setSelectedRow(idx)}
              >
                <td className="border-t p-2 text-center">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(idx)}
                    onChange={e => {
                      const checked = e.target.checked;
                      setSelectedRows(prev =>
                        checked ? [...prev, idx] : prev.filter(i => i !== idx)
                      );
                    }}
                  />
                </td>
                <td className="border-t p-2 text-blue-500 font-medium text-center">{idx + 1}</td>
                {columns.map(col => (
                  <td key={col} className="border-t p-2">
                    <input
                      type="text"
                      value={
                        typeof row[col] === 'object' && row[col] !== null
                          ? JSON.stringify(row[col])
                          : row[col]
                      }
                      onChange={e => handleEdit(row.id, col, e.target.value)}
                      className="w-full border border-gray-200 rounded px-2 py-1 text-sm"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </AppLayout>
  );
};

export default ExcelGrid;
