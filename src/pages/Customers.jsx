import { NavLink } from "react-router-dom";
import customers from "../customers.json";
import PageHeader from "../components/PageHeader";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

export default function Customers() {
  return (
    <div className="font-barlow">
      <PageHeader title="Customers" breadcrumb={["Dashboard", "Customers"]}>
        <NavLink
          to="/customers/add"
          className="bg-hijau hover:bg-green-600 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-md active:scale-95 flex items-center gap-2">
            <FaPlus size={14} />
          Add Customers
        </NavLink>
      </PageHeader>

      <div className="p-5">
        {/* Box Putih Utama */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="text-left bg-gray-50 border-b border-gray-100">
                <th className="p-4 font-bold text-gray-400 text-sm">ID</th>
                <th className="p-4 font-bold text-gray-400 text-sm">
                  CUSTOMER
                </th>
                <th className="p-4 font-bold text-gray-400 text-sm">CONTACT</th>
                <th className="p-4 font-bold text-gray-400 text-sm text-center">
                  ACTIONS
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              {customers.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  {/* ID User */}
                  <td className="p-4">
                    <span className="text-gray-500 font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                      #{item.customerId}
                    </span>
                  </td>

                  {/* Nama dengan Inisial Bulat */}
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-hijau/10 text-hijau flex items-center justify-center font-bold">
                        {item.customerName.charAt(0)}
                      </div>
                      <span className="font-bold text-gray-800">
                        {item.customerName}
                      </span>
                    </div>
                  </td>

                  {/* Info Kontak */}
                  <td className="p-4">
                    <div className="flex flex-col text-sm">
                      <span className="text-gray-700 font-medium">
                        {item.email}
                      </span>
                      <span className="text-gray-400">{item.phone}</span>
                    </div>
                  </td>

                  {/* Tombol Action Edit & Hapus */}
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-3">
                      <button className="p-2 bg-blue-50 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all">
                        <FaEdit size={14} />
                      </button>
                      <button className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all">
                        <FaTrash size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer info jumlah data */}
        <div className="mt-4 text-gray-400 text-sm px-2">
          Total Customers: <b>{customers.length}</b>
        </div>
      </div>
    </div>
  );
}
