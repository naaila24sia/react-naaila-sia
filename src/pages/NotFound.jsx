import { FaExclamationTriangle, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom"; // Atau 'next/link' jika pakai Next.js

export default function NotFound() {
  return (
    <div className="min-h-full flex items-center justify-center bg-white/10 font-barlow">
      <div className="max-w-md w-full text-center">
        {/* Card Container */}
        <div className="bg-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
          
          {/* Dekorasi Abstract (Mirip Dashboard) */}
          <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-merah/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-20px] left-[-20px] w-32 h-32 bg-hijau/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            {/* Icon Section */}
            <div className="flex justify-center mb-6">
              <div className="bg-merah/10 p-6 rounded-full">
                <FaExclamationTriangle className="text-6xl text-merah" />
              </div>
            </div>

            {/* Text Section */}
            <h1 className="text-7xl font-poppins font-black text-gray-900 mb-2">
              404
            </h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-gray-500 mb-8">
              Halaman yang kamu cari tidak ditemukan atau telah dipindahkan ke dimensi lain.
            </p>

            {/* Button */}
            <Link 
              to="/" 
              className="inline-flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gray-900 hover:bg-black text-white rounded-xl font-bold transition-all shadow-lg group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Dashboard</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}