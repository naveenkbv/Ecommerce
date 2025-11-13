import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function AdminNavbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        <input placeholder="Search..." className="border p-1 rounded" />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm">{user?.name}</span>
        <button onClick={logout} className="text-sm text-red-600">
          Logout
        </button>
      </div>
    </div>
  );
}
