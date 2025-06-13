import React from 'react';
import { ListFilter  }  from 'lucide-react';

const billingData = [
  {
    id: 'QB/00001/2025',
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
  // Add more rows as needed
];

const BillingGrid = () => {
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
                className="text-sm border rounded px-2 py-1 text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
                <button className="p-2 rounded hover:bg-gray-100 text-gray-600">🔍</button>
                <button className="p-2 rounded hover:bg-gray-100 text-gray-600"><ListFilter /></button>
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
                    {billingData.map((item, idx) => (
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
                            <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
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

    </div>
        );
};

export default BillingGrid;
