"use client"; // Needed for Next.js client components

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function RechartsLine(data) {
  console.log("SIND DATEN SCHON DAAAAA?????? " + JSON.stringify(data, null, 2));
  if (!data || data.length === 0) {
    return <p>Loading...</p>; // Show loading message until data is available
  }
  return (
    <LineChart width={800} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="start_date"
        tickFormatter={(date) => new Date(date).toLocaleDateString()}
      />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="moving_time" stroke="#8884d8" />
    </LineChart>
  );
}
