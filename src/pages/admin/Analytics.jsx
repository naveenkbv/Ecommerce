import React from "react";
import Chart from "../../components/Chart";

export default function Analytics() {
  const revenue = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 500 },
    { name: "Apr", value: 200 },
    { name: "May", value: 700 },
    { name: "Jun", value: 600 },
  ];
  const users = [
    { name: "Jan", value: 20 },
    { name: "Feb", value: 30 },
    { name: "Mar", value: 45 },
    { name: "Apr", value: 60 },
    { name: "May", value: 75 },
    { name: "Jun", value: 90 },
  ];

  return (
    <div>
      <h3 className="text-xl mb-4">Analytics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h4 className="mb-2">Monthly Revenue</h4>
          <Chart data={revenue} dataKey="value" />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h4 className="mb-2">User Growth</h4>
          <Chart data={users} dataKey="value" />
        </div>
      </div>
    </div>
  );
}
