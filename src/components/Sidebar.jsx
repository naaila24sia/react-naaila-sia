import { MdDashboard } from "react-icons/md";
import { FaList, FaHeadphones, FaPlus, FaBan, FaLock, FaTimesCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
        ${
          isActive
            ? "text-hijau bg-green-200 font-extrabold"
            : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`;

  return (
    <div 
      id="sidebar" 
      className="sticky top-0 flex h-screen w-90 flex-col bg-white px-8 py-6 shadow-lg overflow-hidden"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span id="logo-title" className="font-poppins text-[42px] leading-tight text-gray-900">
          Sedap<b className="text-hijau">.</b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mt-6 flex-1">
        <ul id="menu-list" className="space-y-1">
          <li>
            <NavLink to="/" className={menuClass}>
              <MdDashboard className="mr-4 text-xl" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" className={menuClass}>
              <FaList className="mr-4 text-xl" />
              <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/customers" className={menuClass}>
              <FaHeadphones className="mr-4 text-xl" />
              <span>Customers</span>
            </NavLink>
          </li>

          {/* LABEL ERROR PAGE */}
          <li className="pt-4 pb-2 px-4">
            <p className="text-[12px] font-bold uppercase tracking-[2px] text-gray-400">
              Error Pages
            </p>
          </li>

          <li>
            <NavLink to="/400" className={menuClass}>
              <FaBan className="mr-4 text-xl" />
              <span>Error 400</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/401" className={menuClass}>
              <FaLock className="mr-4 text-xl" />
              <span>Error 401</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/403" className={menuClass}>
              <FaTimesCircle className="mr-4 text-xl" />
              <span>Error 403</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto pt-4">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-4 rounded-2xl shadow-lg mb-6 flex items-center relative overflow-hidden"
        >
          <div className="z-10 w-2/3">
            <span className="text-white text-sm leading-tight block">
              Please organize your menus through button below!
            </span>
            <div className="flex justify-center items-center p-2 mt-3 bg-white rounded-xl space-x-2 shadow-sm cursor-pointer">
              <FaPlus className="text-gray-600 text-xs" />
              <span className="text-gray-600 font-bold text-xs">Add Menus</span>
            </div>
          </div>
          
          {/* PERUBAHAN HANYA DI SINI: Profil sekarang di tengah kanan kartu */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140051.png"
            className="w-20 absolute right-1 top-1/2 -translate-y-1/2"
            alt="avatar"
          />
        </div>

        <div className="flex flex-col mb-2">
          <span className="font-bold text-gray-400 text-xs">
            Sedap Restaurant Admin Dashboard
          </span>
          <p className="font-light text-gray-400 text-[10px]">
            &copy; 2025 All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
}