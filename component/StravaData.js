"use client"; // Ensure this runs on the client side in Next.js

import { useState, useEffect } from "react";

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

  return (
    <>
      <h1>Strava Data:</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre> // Format JSON data nicely
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
