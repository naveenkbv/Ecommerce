import React, { useEffect, useState } from "react";
import { loadOrders, saveOrders } from "../../data/ordersData";
import { loadUsers } from "../../data/usersData";
import { toast } from "react-toastify";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("All");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setOrders(loadOrders());
    setUsers(loadUsers());
  }, []);

  function updateStatus(id, status) {
    const next = orders.map((o) => (o.id === id ? { ...o, status } : o));
    saveOrders(next);
    setOrders(next);
    toast.success("Order updated");
  }

  const filtered = orders.filter((o) =>
    filter === "All" ? true : o.status === filter
  );

  function userName(id) {
    return users.find((u) => u.id === id)?.name || "Unknown";
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl">Orders</h3>
        <div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border p-2"
          >
            <option>All</option>
            <option>Pending</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">User</th>
              <th className="p-2">Total</th>
              <th className="p-2">Date</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((o) => (
              <tr key={o.id} className="border-t">
                <td className="p-2">{o.id}</td>
                <td className="p-2">{userName(o.userId)}</td>
                <td className="p-2">${o.total}</td>
                <td className="p-2">{o.date}</td>
                <td className="p-2">{o.status}</td>
                <td className="p-2">
                  {o.status !== "Shipped" && (
                    <button
                      className="mr-2 text-blue-600"
                      onClick={() => updateStatus(o.id, "Shipped")}
                    >
                      Mark Shipped
                    </button>
                  )}
                  {o.status !== "Delivered" && (
                    <button
                      className="text-green-600"
                      onClick={() => updateStatus(o.id, "Delivered")}
                    >
                      Mark Delivered
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
