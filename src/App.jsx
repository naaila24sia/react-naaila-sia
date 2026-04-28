import React, { Suspense } from "react";
import "./assets/tailwind.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Loading from "./components/Loading";

function App() {
  const Dashboard = React.lazy(() => import("./pages/Dashboard"));
  const Customers = React.lazy(() => import("./pages/Customers"));
  const Orders = React.lazy(() => import("./pages/Orders"));
  const NotFound = React.lazy(() => import("./pages/NotFound"));
  const Error400 = React.lazy(() => import("./pages/Error400"));
  const Error401 = React.lazy(() => import("./pages/Error401"));
  const Error403 = React.lazy(() => import("./pages/Error403"));
  const AddCustomers = React.lazy(() => import("./pages/AddCustomers"));
  const AddOrders = React.lazy(() => import("./pages/AddOrders"));
  const Login = React.lazy(() => import("./pages/auth/Login"));
  const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
  const Register = React.lazy(() => import("./pages/auth/Register"));
  const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
  const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/400" element={<Error400 />} />
          <Route path="/401" element={<Error401 />} />
          <Route path="/403" element={<Error403 />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/customers/add" element={<AddCustomers />} />
          <Route path="/orders/add" element={<AddOrders />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
