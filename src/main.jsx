import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import MyOrders from "./pages/MyOrders";
import AccountLogin from "./pages/AccountLogin";
import ProductList from "./pages/ProductList";
import MyInformation from "./pages/MyInformation";
import { Navigate } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/login" element={<AccountLogin />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/my-orders" element={<MyOrders />} />
        
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/my-information" element={<MyInformation />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
