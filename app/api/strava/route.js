export async function GET() {
  const res = await fetch(
    "https://strava.com/api/v3/athlete/activities?access_token=0c11745583920314672e5b6efc10526ab5395b69"
  );
  const activities = await res.json();

  // Extract only the required fields
  const filteredData = activities.map(
    ({ elapsed_time, sport_type, start_date }) => ({
      elapsed_time,
      sport_type,
      start_date,
    })
  );

  return Response.json(filteredData);
}
