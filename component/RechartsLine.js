"use client"; // Needed for Next.js client components
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function RechartsLine({ data }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    console.log(
      "SIND DATEN SCHON DAAAAA?????? " + JSON.stringify(data, null, 2)
    );
    if (data && data.length > 0) {
      setChartData(data);
    }
  }, [data]);

  if (chartData.length === 0) {
    return <p>Loading...</p>; // Show loading message until data is available
  }

  return (
    <LineChart width={800} height={400} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="start_date"
        tickFormatter={(date) => new Date(date).toLocaleDateString()}
      />
      <YAxis 
        dataKey="moving_time"
        tickFormatter={(time) => (time / 60).toFixed(1)} // Convert seconds to minutes
        label={{ value: "Minutes", angle: -90, position: "insideLeft" }} // Optional label
      />
      <Tooltip formatter={(value) => `${(value / 60).toFixed(1)} min`} />
      <Legend />
      <Line type="monotone" dataKey="moving_time" stroke="#8884d8" />
    </LineChart>
  );
}