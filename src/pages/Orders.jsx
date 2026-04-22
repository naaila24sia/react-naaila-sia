import { NavLink } from "react-router-dom";
import orders from "../orders.json";
import PageHeader from "../components/PageHeader";
import { FaEdit, FaTrash, FaPlus, FaCircle } from "react-icons/fa";

export default function Orders() {
  return (
    <div className="font-barlow">
      <PageHeader 
        title="Orders"
        breadcrumb={["Dashboard", "Orders"]}
      >
        <NavLink
          to="/orders/add"
          className="bg-hijau hover:bg-green-600 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-md active:scale-95 flex items-center gap-2"
        >
          <FaPlus size={14} />
          <span>Add Order</span>
        </NavLink>
      </PageHeader>

      <div className="p-5">
        {/* Card Putih Utama */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100 text-gray-400 uppercase text-xs">
                <th className="p-5 font-bold tracking-wider">Order ID</th>
                <th className="p-5 font-bold tracking-wider">Customer</th>
                <th className="p-5 font-bold tracking-wider">Status</th>
                <th className="p-5 font-bold tracking-wider">Total Price</th>
                <th className="p-5 font-bold tracking-wider text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              {orders.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50/80 transition-colors group">
                  
                  {/* ID Pesanan */}
                  <td className="p-5 text-sm font-bold text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded-lg">#{item.orderId}</span>
                  </td>

                  {/* Profile Customer (Sama kayak halaman Customers) */}
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-hijau/10 text-hijau flex items-center justify-center font-bold shadow-sm">
                        {item.customerName.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-800 text-base">{item.customerName}</span>
                        <span className="text-gray-400 text-xs italic">{item.orderDate}</span>
                      </div>
                    </div>
                  </td>

                  {/* Badge Status Berwarna */}
                  <td className="p-5">
                    <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase italic shadow-sm
                      ${item.status === 'Completed' ? 'bg-green-100 text-green-600' : 
                        item.status === 'Cancelled' ? 'bg-red-100 text-red-600' : 
                        'bg-orange-100 text-orange-600'}`}>
                      <FaCircle size={6} />
                      {item.status}
                    </span>
                  </td>

                  {/* Harga Format Rupiah */}
                  <td className="p-5">
                    <span className="font-bold text-gray-800">
                      Rp {item.totalPrice.toLocaleString('id-ID')}
                    </span>
                  </td>

                  {/* Tombol Aksi Pakai Icon */}
                  <td className="p-5">
                    <div className="flex items-center justify-center gap-3">
                      <button className="p-2.5 bg-blue-50 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-all shadow-sm">
                        <FaEdit size={14} />
                      </button>
                      <button className="p-2.5 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm">
                        <FaTrash size={14} />
                      </button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Kecil */}
        <p className="mt-4 px-2 text-gray-400 text-sm italic font-medium">
          Menampilkan total <b>{orders.length}</b> pesanan aktif.
        </p>
      </div>
    </div>
  );
}