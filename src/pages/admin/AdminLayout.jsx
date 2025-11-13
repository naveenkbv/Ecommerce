import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../../index.css";
import "./admin.css";
import AdminNavbar from "../../components/AdminNavbar";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const SidebarLink = ({ to, children }) => {
  const location = useLocation();
  const active =
    location.pathname === to || location.pathname.startsWith(to + "/");
  return (
    <li className={"sidebar-item " + (active ? "active" : "")}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default function AdminLayout() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="admin-root">
      <aside className="admin-sidebar">
        <div className="admin-logo">Admin Panel</div>
        <ul className="sidebar-list">
          <SidebarLink to="/admin">Dashboard</SidebarLink>
          <SidebarLink to="/admin/users">Users</SidebarLink>
          <SidebarLink to="/admin/products">Products</SidebarLink>
          <SidebarLink to="/admin/orders">Orders</SidebarLink>
          <SidebarLink to="/admin/analytics">Analytics</SidebarLink>
          <SidebarLink to="/admin/settings">Settings</SidebarLink>
          <li className="sidebar-item">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
            >
              Logout
            </a>
          </li>
        </ul>
      </aside>

      <main className="admin-main">
        <AdminNavbar />
        <section className="admin-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
