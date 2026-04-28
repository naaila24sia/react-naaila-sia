import { NavLink } from "react-router-dom";
import orders from "../data/orders.json";
import PageHeader from "../components/PageHeader";
import { FaEdit, FaTrash, FaPlus, FaCircle } from "react-icons/fa";

export default function Orders() {
  return (
    <div className="font-barlow bg-gray-50/50 min-h-screen">
      <PageHeader 
        title="Orders"
        breadcrumb={["Dashboard", "Orders List"]}
      >
        <NavLink
          to="/orders/add"
          className="bg-hijau hover:bg-green-600 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-md active:scale-95 flex items-center gap-2"
        >
          <FaPlus size={14} />
          <span>Add Order</span>
        </NavLink>
      </PageHeader>

      <div className="p-6">
        {/* Card Utama */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100 text-gray-400 uppercase text-[11px] tracking-widest font-bold">
                  {/* Penyesuaian Header agar sinkron dengan isi */}
                  <th className="p-6 text-left">Order ID</th>
                  <th className="p-6 text-left">Order Details</th>
                  <th className="p-6 text-center">Status</th>
                  <th className="p-6 text-left">Amount</th>
                  <th className="p-6 text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50">
                {orders.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50/50 transition-all group">
                    
                    {/* KOLOM 1: ORDER ID (Rata Kiri) */}
                    <td className="p-6 text-left">
                      <span className="bg-[#F1F3F5] text-[#5C7285] px-4 py-2 rounded-xl font-bold text-sm">
                        #{item.orderId}
                      </span>
                    </td>

                    {/* KOLOM 2: CUSTOMER DETAILS (Rata Kiri - Justify Center dihapus) */}
                    <td className="p-6 text-left">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-hijau text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-green-100 transition-transform group-hover:scale-105">
                          {item.customerName.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-hijau text-lg leading-tight">
                            {item.customerName}
                          </span>
                          <span className="text-gray-300 text-[11px] mt-1 italic font-medium">
                            {item.orderDate}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* KOLOM 3: STATUS (Tetap Center agar simetris) */}
                    <td className="p-6 text-center">
                      <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-sm
                        ${item.status === 'Completed' ? 'bg-green-50 text-green-500 border border-green-100' : 
                          item.status === 'Cancelled' ? 'bg-red-50 text-red-500 border border-red-100' : 
                          'bg-orange-50 text-orange-500 border border-orange-100'}`}>
                        <FaCircle size={6} className={item.status === 'Pending' ? 'animate-pulse' : ''} />
                        {item.status}
                      </span>
                    </td>

                    {/* KOLOM 4: AMOUNT (Rata Kiri agar sejajar dengan header Amount) */}
                    <td className="p-6 text-left">
                      <div className="flex flex-col">
                        <span className="text-[11px] text-gray-400 font-medium uppercase tracking-tight">Total Paid</span>
                        <span className="font-bold text-gray-800 text-lg leading-none mt-1">
                          Rp {item.totalPrice.toLocaleString('id-ID')}
                        </span>
                      </div>
                    </td>

                    {/* KOLOM 5: ACTIONS (Tetap Center) */}
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2.5 bg-white text-blue-500 border border-blue-50 rounded-xl hover:bg-blue-500 hover:text-white transition-all shadow-sm">
                          <FaEdit size={16} />
                        </button>
                        <button className="p-2.5 bg-white text-red-500 border border-red-50 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm">
                          <FaTrash size={16} />
                        </button>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-4 px-2 text-gray-400 text-sm italic font-medium">
          Showing <b>{orders.length}</b> total orders in this period.
        </p>
      </div>
    </div>
  );
}