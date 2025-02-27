"use client"; // Needed for Next.js client components

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { name: "A", uv: 400 },
  { name: "B", uv: 300 },
  { name: "C", uv: 200 },
  { name: "D", uv: 278 },
];

export default function RechartsLine() {
  return (
    <LineChart width={400} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
}
