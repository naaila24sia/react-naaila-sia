import { NavLink } from "react-router-dom";
import customers from "../data/customers.json";
import PageHeader from "../components/PageHeader";
import { FaEdit, FaTrash, FaPlus, FaCrown } from "react-icons/fa";

export default function Customers() {
  return (
    <div className="font-barlow bg-gray-50/50 min-h-screen">
      <PageHeader 
        title="Customers" 
        breadcrumb={["Dashboard", "Customers List"]}
      >
        <NavLink
          to="/customers/add"
          className="bg-hijau hover:bg-green-600 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-md active:scale-95 flex items-center gap-2"
        >
          <FaPlus size={14} />
          <span>Add Customers</span>
        </NavLink>
      </PageHeader>

      <div className="p-6">
        {/* Card Utama - Mengikuti style Orders */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100 text-gray-400 uppercase text-[11px] tracking-widest font-bold">
                  <th className="p-6 text-left">Customer ID</th>
                  <th className="p-6 text-left">Customer Details</th>
                  <th className="p-6 text-center">Loyalty Status</th>
                  <th className="p-6 text-left">Contact Info</th>
                  <th className="p-6 text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50">
                {customers.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50/50 transition-all group">
                    
                    {/* KOLOM 1: ID - Style Badge Bulat Kotak dari Orders */}
                    <td className="p-6">
                      <span className="bg-[#F1F3F5] text-[#5C7285] px-4 py-2 rounded-xl font-bold text-sm">
                        #{item.customerId}
                      </span>
                    </td>

                    {/* KOLOM 2: CUSTOMER DETAILS - Warna Hijau & Shadow dari Orders */}
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-hijau text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-green-100 transition-transform group-hover:scale-105">
                          {item.customerName.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-hijau text-lg leading-tight">
                            {item.customerName}
                          </span>
                          <span className="text-gray-300 text-[11px] mt-1 italic font-medium">
                            Premium Member
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* KOLOM 3: LOYALTY - Badge Status */}
                    <td className="p-6 text-center">
                      <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-sm
                        ${item.loyalty === 'Bronze' ? 'bg-orange-50 text-orange-500 border border-orange-100' : 
                          item.loyalty === 'Silver' ? 'bg-slate-50 text-slate-500 border border-slate-100' : 
                          item.loyalty === 'Gold' ? 'bg-yellow-50 text-yellow-500 border border-yellow-100' : 
                          item.loyalty === 'Platinum' ? 'bg-purple-50 text-purple-500 border border-purple-100' : 
                          'bg-gray-50 text-gray-400 border border-gray-100'}`}>
                        <FaCrown size={8} />
                        {item.loyalty}
                      </span>
                    </td>

                    {/* KOLOM 4: CONTACT INFO - Style Text Rapi */}
                    <td className="p-6">
                      <div className="flex flex-col">
                        <span className="text-gray-800 font-bold text-sm">
                          {item.email}
                        </span>
                        <span className="text-gray-400 text-[11px] font-medium mt-0.5">
                          {item.phone}
                        </span>
                      </div>
                    </td>

                    {/* KOLOM 5: ACTIONS - Style Button Blue & Red dari Orders */}
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

        {/* Footer info mengikuti Orders */}
        <p className="mt-4 px-2 text-gray-400 text-sm italic font-medium">
          Showing <b>{customers.length}</b> total customers in this period.
        </p>
      </div>
    </div>
  );
}