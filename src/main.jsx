import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import { Navigate } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" />} />
         <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/product-list" element={<ProductList />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
