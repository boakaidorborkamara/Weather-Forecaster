let BaseUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;
let api_key = process.env.REACT_APP_API_KEY;

async function getWeatherDetails(latitude, longitude) {
  let user_geo_location = { latitude, longitude };

  try {
    const response = await fetch(
      `${BaseUrl}/Algeria/next5days?unitGroup=metric&include=days%2Ccurrent&key=${api_key}&contentType=json`,
      {
        method: "GET",
      }
    );

    const data = await response.json();
    console.log("DATA", data);
    return data;
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
}

export default getWeatherDetails;
