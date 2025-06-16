import React, { useState } from 'react';
import { ListFilter  }  from 'lucide-react';

const billingData = [
  {
    id: 'QB/00801/2025',
    date: '12/03/2025',
    status: 'Under Amendment',
    customer: 'Otis Group',
    refNo: 'CSR/111/2024',
    contract: 'AO Intertrans',
    orderType: 'Wagon',
    totalNet: '€ 1395.00',
    billingType: 'Wagon',
    qty: '12 Nos',
    groupNet: '€ 1000.00',
    lineNo: 'R01',
    location: 'Frankurt Station',
    fromTo: 'A Point – B Point',
  },
  {
    id: "QB/00061/2026",
    date: "12/03/2025",
    status: "Fresh",
    refNo: "CSR/111/2024",
    customer: "Otits Group",
    contract: "AO Intertrans",
    orderType: "Wagon",
    totalNet: "€ 1395.00",
    qty: "12 Nos",
    groupNet: "€ 1000.00",
    lineNo: "R01",
    location: 'Frankurt Station',
    fromTo: 'A Point – B Point',
  },
  {
    id: "QB/00002/2027",
    date: "12/03/2025",
    status: "Confirmed",
    refNo: "CSR/111/2024",
    customer: "Otits Group",
    contract: "AO Intertrans",
    orderType: "Wagon",
    totalNet: "€ 1395.00",
    qty: "12 Nos",
    groupNet: "€ 1000.00",
    lineNo: "R01",
    location: 'Frankurt Station',
    fromTo: 'A Point – C Point',
  },
  {
    id: "QB/00408/2028",
    date: "12/03/2025",
    status: "Fresh",
    refNo: "CSR/111/2024",
    customer: "Otits Group",
    contract: "AO Intertrans",
    orderType: "Wagon",
    totalNet: "€ 1395.00",
    qty: "12 Nos",
    groupNet: "€ 1000.00",
    lineNo: "R01",
    location: 'Frankurt Station',
    fromTo: 'C Point – B Point',
  }
  // Add more rows as needed
];

const BillingGrid = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [filters, setFilters] = useState({
        fresh: false,
        underAmendment: false,
        authorized: false,
    });
    const resetFilters = () => {
        setFilters({
          fresh: false,
          underAmendment: false,
          authorized: false,
        });
      };
    const setStatusColor = (_status:any) => {
        switch(_status){
            case 'Under Amendment':
                return 'bg-orange-100 text-orange-600';
            case "Fresh":
                return 'bg-blue-100 text-blue-600';
            case 'Confirmed':
                return 'bg-green-100 text-green-600';
            default:
                return 'bg-gray-100 text-gray-600';
        }
    }
    const [billingList, setBillingList] = useState(billingData);
    const handleSearch = (key:any) =>{
        const value:any=key.target.value;
        console.log("VAL = ",value)
        const searchResult= billingData.filter((item)=>
            ((item.id.toUpperCase()).includes(value.toUpperCase()))
        )
        console.log("SEARCH RESULT : ",searchResult)
        setBillingList(searchResult);
    }
  return (
    <div >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-6 bg-gray-50 rounded px-2 py-2">
            <div className="flex items-center gap-2 mb-2 md:mb-0">
                <span className="text-sm font-semibold text-gray-800">Recent Bills</span>
                <span className="text-xs bg-blue-100 text-blue-600 font-semibold px-2 py-0.5 rounded-full">8</span>
            </div>
            <div className="flex items-center gap-2">
                <input
                type="text"
                placeholder="Search"
                onChange={(e)=>handleSearch(e)}
                className="text-sm border rounded px-2 py-1 text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
                <button className="p-2 rounded hover:bg-gray-100 text-gray-600">🔍</button>
                <button className="p-2 rounded hover:bg-gray-100 text-gray-600" onClick={()=>setShowFilter(true)}><ListFilter /></button>
                <button className="p-2 rounded hover:bg-gray-100 text-gray-600">⬇️</button>
                <button className="p-2 rounded hover:bg-blue-100 text-blue-600">⬛⬛</button>
                <button className="p-2 rounded hover:bg-blue-100 text-blue-600">☰</button>
            </div>
        </div>
            <div className="overflow-auto rounded-md border border-gray-200">
                <table className="min-w-[1000px] w-full text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-semibold">
                    <tr>
                        <th className="p-3">
                        <input type="checkbox" />
                        </th>
                        <th className="p-3">Quick Billing No.<br />Date</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Customer/Supplier<br />Ref. No.</th>
                        <th className="p-3">Contract<br />Order Type</th>
                        <th className="p-3">Total Net<br />Amount</th>
                        <th className="p-3">Billing Type<br />Qty.</th>
                        <th className="p-3">Group Net Amount<br />Line No.</th>
                        <th className="p-3">Operational Location<br />From Point – To Point</th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-800">
                    {billingList.map((item, idx) => (
                        <tr key={idx} className="border-t">
                        <td className="p-3">
                            <input type="checkbox" />
                        </td>
                        <td className="p-3 text-blue-600 underline">
                            {item.id}
                            <br />
                            <span className="text-xs text-gray-500">{item.date}</span>
                        </td>
                        <td className="p-3">
                            <span className={`text-xs font-semibold px-2 py-1 rounded  ${setStatusColor(item.status)}`}>
                            {item.status}
                            </span>
                        </td>
                        <td className="p-3">
                            {item.customer}
                            <br />
                            <span className="text-xs text-gray-500">{item.refNo}</span>
                        </td>
                        <td className="p-3">
                            {item.contract}
                            <br />
                            <span className="text-xs text-gray-500">{item.orderType}</span>
                        </td>
                        <td className="p-3 font-semibold">{item.totalNet}</td>
                        <td className="p-3">
                            {item.billingType}
                            <br />
                            <span className="text-xs text-gray-500">{item.qty}</span>
                        </td>
                        <td className="p-3">
                            {item.groupNet}
                            <br />
                            <span className="text-xs text-gray-500">{item.lineNo}</span>
                        </td>
                        <td className="p-3">
                            {item.location}
                            <br />
                            <span className="text-xs text-gray-500">{item.fromTo}</span>
                        </td>
                        </tr>
                    ))}
                    </tbody>
            </table>
        </div>

    
      {/* Filter Popup */}
      {showFilter && (
        <div className="relative top-12 right-0 w-64 bg-white border rounded shadow-lg z-50">
          <div className="p-4 border-b font-semibold text-sm text-gray-700">Filter</div>
          <div className="p-4 space-y-3 text-sm text-gray-700">
            {/* Fresh */}
            <label className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.fresh}
                  onChange={() =>
                    setFilters((prev) => ({ ...prev, fresh: !prev.fresh }))
                  }
                />
                Fresh
              </div>
              <span className="text-xs text-blue-500 font-semibold bg-blue-100 rounded-full px-2">
                04
              </span>
            </label>

            {/* Under Amendment */}
            <label className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.underAmendment}
                  onChange={() =>
                    setFilters((prev) => ({ ...prev, underAmendment: !prev.underAmendment }))
                  }
                />
                Under Amendment
              </div>
              <span className="text-xs text-orange-500 font-semibold bg-orange-100 rounded-full px-2">
                01
              </span>
            </label>

            {/* Authorized */}
            <label className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.authorized}
                  onChange={() =>
                    setFilters((prev) => ({ ...prev, authorized: !prev.authorized }))
                  }
                />
                Authorized
              </div>
              <span className="text-xs text-green-500 font-semibold bg-green-100 rounded-full px-2">
                03
              </span>
            </label>
          </div>

          {/* Buttons */}
          <div className="px-4 py-3 flex justify-end gap-2 border-t bg-gray-50">
            <button
              onClick={resetFilters}
              className="border border-gray-300 px-3 py-1 rounded text-sm"
            >
              Reset
            </button>
            <button
              onClick={() => {
                setShowFilter(false);
                console.log("Apply Filters:", filters);
              }}
              className="bg-blue-600 text-white px-4 py-1 rounded text-sm"
            >
              Apply
            </button>
          </div>
        </div>
      )} {/*Filter popup ends*/}

    </div>
);
};

export default BillingGrid;
