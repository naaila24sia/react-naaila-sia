import PageHeader from "../components/PageHeader";

export default function AddOrders() {
  return (
    <div className="p-6 bg-neutral-50 min-h-screen font-sans">
      <PageHeader
        title="Add Order"
        breadcrumb={["Dashboard", "Orders", "Add"]}
      />

      <div className="mt-8">
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
          
          {/* Header Form */}
          <div className="p-8 border-b border-neutral-50">
            <h2 className="text-xl font-bold text-gray-800">Order Information</h2>
            <p className="text-sm text-gray-500">Input new transaction details and order status.</p>
          </div>

          {/* Body Form - Grid 2 Kolom Murni */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              
              {/* Field 1: Customer Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Customer Name</label>
                <input 
                  type="text"
                  placeholder="Enter customer name" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 focus:border-hijau outline-none transition-all placeholder:text-gray-400" 
                />
              </div>

              {/* Field 2: Order Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Order Date</label>
                <input 
                  type="date"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 focus:border-hijau outline-none transition-all text-gray-600" 
                />
              </div>

              {/* Field 3: Order Status */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Order Status</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 focus:border-hijau outline-none transition-all cursor-pointer">
                  <option value="" disabled selected>Select Status</option>
                  <option>Pending</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
              </div>

              {/* Field 4: Total Price */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Total Price (Rp)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">Rp</span>
                  <input 
                    type="number"
                    placeholder="0" 
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 focus:border-hijau outline-none transition-all placeholder:text-gray-400" 
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Footer Action */}
          <div className="px-8 py-6 bg-gray-50/50 border-t border-neutral-100 flex justify-end items-center gap-4">
            <button className="px-6 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl transition-all">
              Discard
            </button>
            <button className="bg-hijau hover:bg-opacity-90 text-white px-10 py-2.5 rounded-xl font-bold shadow-lg shadow-hijau/20 transition-all transform active:scale-95">
              Create Order
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}