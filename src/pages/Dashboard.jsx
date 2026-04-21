import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  return (
    <div id="dashboard-container">
      <PageHeader />
      <div className="px-5 mb-6">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl 
        relative overflow-hidden font-barlow">
          {/* Dekorasi Abstract */}
          <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-poppins font-extrabold italic">
              Welcome back, Naaila! 🥗
            </h2>
            <p className="text-gray-300 mt-2 max-w-md">
              You have <span className="text-kuning font-bold">12 new orders</span> waiting to be processed. Let's get started!
            </p>
            
            <button className="mt-4 px-6 py-2 bg-hijau hover:bg-green-600 text-white rounded-xl text-sm font-bold transition-all shadow-lg">
              View All Orders
            </button>
          </div>
        </div>
      </div>
      <div
        id="dashboard-grid"
        className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4"
      >
        {/* Orders */}
        <div
          id="count-orders"
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4"
        >
          <div id="orders-icon" className="bg-hijau rounded-full p-4">
            <FaShoppingCart className="text-3xl text-white" />
          </div>

          <div id="orders-info" className="flex flex-col">
            <span id="orders-count" className="text-2xl font-bold">
              75
            </span>
            <span id="orders-text" className="text-gray-400">
              Total Orders
            </span>
          </div>
        </div>

        {/* Delivered */}
        <div
          id="count-delivered"
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4"
        >
          <div id="delivered-icon" className="bg-biru rounded-full p-4">
            <FaTruck className="text-3xl text-white" />
          </div>

          <div id="delivered-info" className="flex flex-col">
            <span id="delivered-count" className="text-2xl font-bold">
              175
            </span>
            <span id="delivered-text" className="text-gray-400">
              Total Delivered
            </span>
          </div>
        </div>

        {/* Canceled */}
        <div
          id="count-canceled"
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4"
        >
          <div id="canceled-icon" className="bg-merah rounded-full p-4">
            <FaBan className="text-3xl text-white" />
          </div>

          <div id="canceled-info" className="flex flex-col">
            <span id="canceled-count" className="text-2xl font-bold">
              40
            </span>
            <span id="canceled-text" className="text-gray-400">
              Total Canceled
            </span>
          </div>
        </div>

        {/* Revenue */}
        <div
          id="count-revenue"
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4"
        >
          <div id="revenue-icon" className="bg-kuning rounded-full p-4">
            <FaDollarSign className="text-3xl text-white" />
          </div>

          <div id="revenue-info" className="flex flex-col">
            <span id="revenue-amount" className="text-2xl font-bold">
              Rp.128
            </span>
            <span id="revenue-text" className="text-gray-400">
              Total Revenue
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
