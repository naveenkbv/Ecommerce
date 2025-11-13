import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const res = login({ email, password });
    if (res.success) {
      toast.success("Logged in");
      navigate("/admin");
    } else {
      toast.error(res.message || "Login failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl mb-4">Admin Login</h2>
        <label className="block mb-2">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <label className="block mb-2">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="border p-2 mb-4 w-full"
        />
        <button className="btn w-full" type="submit">
          Login
        </button>
        <p className="mt-2 text-sm text-gray-500">
          Use admin@example.com / admin123
        </p>
      </form>
    </div>
  );
}
