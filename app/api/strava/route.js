import { NextResponse } from "next/server";

const STRAVA_API_URL = "https://www.strava.com/api/v3";
const CLIENT_ID = process.env.STRAVA_CLIENT_ID;
const CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.STRAVA_REFRESH_TOKEN;

let accessToken = process.env.STRAVA_ACCESS_TOKEN; // Store access token in memory

// Function to refresh the access token
async function refreshAccessToken() {
  try {
    const response = await fetch(`https://www.strava.com/oauth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: REFRESH_TOKEN,
      }),
    });

    const data = await response.json();
    if (!response.ok)
      throw new Error(data.message || "Failed to refresh token");

    accessToken = data.access_token; // Update the stored access token
    return accessToken;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
}

// Function to fetch data from Strava API
async function fetchStravaData() {
  try {
    const response = await fetch(`${STRAVA_API_URL}/athlete/activities`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 401) {
      // Token expired, refresh and retry
      console.log("Access token expired, refreshing...");
      const newToken = await refreshAccessToken();
      if (!newToken) throw new Error("Failed to refresh token");

      // Retry request with new token
      return await fetchStravaData();
    }

    if (!response.ok) throw new Error("Failed to fetch Strava data");

    return await response.json();
  } catch (error) {
    console.error("Error fetching Strava data:", error);
    return null;
  }
}

// API Route handler
export async function GET() {
  const data = await fetchStravaData();
  if (!data)
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );

  return NextResponse.json(data);
}
