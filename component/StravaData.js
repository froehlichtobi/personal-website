"use client"; // Ensure this runs on the client side in Next.js

import { useState, useEffect } from "react";
import RechartsLine from "./RechartsLine";

export default function StravaData() {
  const [data, setData] = useState(null); // State to store fetched data

  async function getStravaData() {
    try {
      const response = await fetch("/api/strava");
      const result = await response.json();
      setData(result); // Store data in state
    } catch (error) {
      console.error("Error fetching Strava data:", error);
      setData({ error: "Failed to load data" });
    }
  }

  useEffect(() => {
    getStravaData();
  }, []);

  //const totalMovingTime = data.reduce(
  //  (sum, activity) => sum + activity.moving_time,
  //  0
  // );

  return (
    <>
      <RechartsLine data={data} />
    </>
  );
}
