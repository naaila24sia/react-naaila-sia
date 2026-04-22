import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import Error400 from "./pages/Error400";
import Error401 from "./pages/Error401";
import Error403 from "./pages/Error403";
import AddOrders from "./pages/AddOrders";
import AddCustomers from "./pages/AddCustomers";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AddOrder from "./pages/AddOrders";   

function App() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar />
        <div id="main-content" className="flex-1 p-4">
          <Header />

          {/* <Dashboard /> */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/400" element={<Error400 />} />
            <Route path="/401" element={<Error401 />} />
            <Route path="/403" element={<Error403 />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/customers/add" element={<AddCustomers />} />
            <Route path="/orders/add" element={<AddOrders />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
