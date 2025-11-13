import React, { createContext, useEffect, useState } from "react";
const AuthContext = createContext();

const ADMIN_KEY = "admin_session_v1";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(ADMIN_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  });

  useEffect(() => {
    if (user) localStorage.setItem(ADMIN_KEY, JSON.stringify(user));
    else localStorage.removeItem(ADMIN_KEY);
  }, [user]);

  function login({ email, password }) {
    // hardcoded credentials: admin@example.com / admin123
    if (email === "admin@example.com" && password === "admin123") {
      const admin = { name: "Admin", email };
      setUser(admin);
      return { success: true };
    }
    return { success: false, message: "Invalid credentials" };
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
