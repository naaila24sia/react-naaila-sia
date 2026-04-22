import PageHeader from "../components/PageHeader";

export default function AddCustomer() {
  return (
    <div className="p-6 bg-neutral-50 min-h-screen">
      <PageHeader 
        title="Add Customer"
        breadcrumb={["Dashboard", "Customers", "Add"]}
      />

      {/* Container utama tanpa max-width agar memenuhi layar */}
      <div className="mt-8">
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
          
          {/* Header Form dengan Padding lebih luas */}
          <div className="p-8 border-b border-neutral-50">
            <h2 className="text-xl font-bold text-gray-800">Customer Information</h2>
            <p className="text-sm text-gray-500">Fill in the details to register a new customer.</p>
          </div>

          {/* Body Form - Menggunakan Grid agar tidak terlihat terlalu panjang melintang */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Kolom Kiri */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text"
                    placeholder="e.g. John Doe" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 focus:border-hijau outline-none transition-all placeholder:text-gray-400" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email"
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 focus:border-hijau outline-none transition-all placeholder:text-gray-400" 
                  />
                </div>
              </div>

              {/* Kolom Kanan */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel"
                    placeholder="+62..." 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 focus:border-hijau outline-none transition-all placeholder:text-gray-400" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Loyalty Tier</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 focus:border-hijau outline-none transition-all cursor-pointer">
                    <option disabled selected>Select Tier</option>
                    <option>Bronze</option>
                    <option>Silver</option>
                    <option>Gold</option>
                  </select>
                </div>
              </div>

            </div>
          </div>

          {/* Footer Form dengan background pemisah yang halus */}
          <div className="px-8 py-6 bg-gray-50/50 border-t border-neutral-100 flex justify-end items-center gap-4">
            <button className="px-6 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl transition-all">
              Cancel
            </button>
            <button className="bg-hijau hover:bg-opacity-90 text-white px-10 py-2.5 rounded-xl font-bold shadow-lg shadow-hijau/20 transition-all transform active:scale-95">
              Save Customer
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}