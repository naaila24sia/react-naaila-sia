import { NavLink,Link } from "react-router-dom";
import products from "../data/Products.json";
import PageHeader from "../components/PageHeader";
import { FaEdit, FaTrash, FaPlus, FaBox, FaTag } from "react-icons/fa";

export default function Products() {
  // Fungsi Helper untuk format mata uang
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="font-barlow bg-gray-50/50 min-h-screen">
      <PageHeader title="Products" breadcrumb={["Dashboard", "Product List"]}>
        <NavLink
          to="/products/add"
          className="bg-hijau hover:bg-green-600 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-md active:scale-95 flex items-center gap-2"
        >
          <FaPlus size={14} />
          <span>Add Product</span>
        </NavLink>
      </PageHeader>

      <div className="p-6">
        {/* Card Utama */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100 text-gray-400 uppercase text-[11px] tracking-widest font-bold">
                  <th className="p-6 text-left">Code</th>
                  <th className="p-6 text-left">Product Details</th>
                  <th className="p-6 text-left">Brand & Category</th>
                  <th className="p-6 text-right">Price</th>
                  <th className="p-6 text-center">Stock</th>
                  <th className="p-6 text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50">
                {products.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50/50 transition-all group"
                  >
                    {/* KOLOM 1: PRODUCT CODE */}
                    <td className="p-6">
                      <span className="bg-[#F1F3F5] text-[#5C7285] px-4 py-2 rounded-xl font-bold text-sm">
                        <Link
                          to={`/products/${item.id}`}
                          className="text-emerald-400 hover:text-emerald-600 transition-colors"
                        >
                          {item.tittle}
                        </Link>
                      </span>
                    </td>

                    {/*PRODUCT TITLE */}
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-hijau text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-green-100 transition-transform group-hover:scale-105">
                          <FaBox size={20} />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-hijau text-lg leading-tight">
                            {item.tittle}
                          </span>
                          <span className="text-gray-300 text-[11px] mt-1 italic font-medium uppercase tracking-wider">
                            In Inventory
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* BRAND & CATEGORY */}
                    <td className="p-6 text-left">
                      <div className="flex flex-col">
                        <span className="text-gray-800 font-bold text-sm">
                          {item.brand}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-gray-400 text-[11px] font-black uppercase tracking-wider mt-1">
                          <FaTag size={8} />
                          {item.category}
                        </span>
                      </div>
                    </td>

                    {/* PRICE */}
                    <td className="p-6 text-right">
                      <span className="text-gray-800 font-extrabold text-sm">
                        {formatCurrency(item.price)}
                      </span>
                    </td>

                    {/*stock*/}
                    <td className="p-6 text-center">
                      <span
                        className={`inline-flex items-center px-4 py-1.5 rounded-xl text-[11px] font-black
                        ${item.stock < 10 ? "bg-red-50 text-red-500 border border-red-100" : "bg-green-50 text-hijau border border-green-100"}`}
                      >
                        {item.stock} Units
                      </span>
                    </td>

                    {/* actions */}
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

        {/* Footer info */}
        <p className="mt-4 px-2 text-gray-400 text-sm italic font-medium">
          Showing <b>{products.length}</b> total products available in catalog.
        </p>
      </div>
    </div>
  );
}
