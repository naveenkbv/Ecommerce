import React, { useEffect, useState } from "react";
import { loadUsers } from "../../data/usersData";
import { loadProducts } from "../../data/productsData";
import { loadOrders } from "../../data/ordersData";
import Chart from "../../components/Chart";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setUsers(loadUsers());
    setProducts(loadProducts());
    setOrders(loadOrders());
  }, []);

  const totalSales = orders.reduce((s, o) => s + (o.total || 0), 0);

  const chartData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 500 },
    { name: "Apr", value: 200 },
    { name: "May", value: 700 },
    { name: "Jun", value: 600 },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Dashboard</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-white rounded shadow">
          Users
          <br />
          <span className="text-2xl">{users.length}</span>
        </div>
        <div className="p-4 bg-white rounded shadow">
          Products
          <br />
          <span className="text-2xl">{products.length}</span>
        </div>
        <div className="p-4 bg-white rounded shadow">
          Orders
          <br />
          <span className="text-2xl">{orders.length}</span>
        </div>
        <div className="p-4 bg-white rounded shadow">
          Sales
          <br />
          <span className="text-2xl">${totalSales.toFixed(2)}</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h4 className="mb-2">Sales (last 6 months)</h4>
        <Chart data={chartData} dataKey="value" name="Sales" />
      </div>
    </div>
  );
}
