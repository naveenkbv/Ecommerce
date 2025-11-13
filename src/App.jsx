import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
// Admin
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Orders from "./pages/admin/Orders";
import AdminProductsPage from "./pages/admin/Products";
import Users from "./pages/admin/Users";
import Analytics from "./pages/admin/Analytics";
import Settings from "./pages/admin/Settings";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/admin/Login";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product_details" element={<ProductDetails />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Route for index2.html after login */}
          <Route path="/index2.html" element={<Home loggedIn={true} />} />

          {/* Admin routes (protected) */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<AdminProductsPage />} />
            <Route path="users" element={<Users />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
        <ToastContainer position="top-right" />
      </Router>
    </AuthProvider>
  );
}

export default App;
