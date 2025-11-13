import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ data, dataKey = "value", name = "Value" }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey={dataKey} stroke="#8884d8" name={name} />
      </LineChart>
    </ResponsiveContainer>
  );
}
