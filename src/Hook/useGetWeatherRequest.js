import { useEffect } from "react";
import getUserCurrentLocationCoordinates from "../Helper/getUserCurrentLocation";
import getWeatherDetails from "../Helper/getWeatherDetails";
let BaseUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;

async function useGetWeatherRequest(
  weather_details,
  setWeatherDetails,
  setIsLoading
) {
  useEffect(() => {
    (async () => {
      let current_location_coordinates =
        await getUserCurrentLocationCoordinates();

      let details = await getWeatherDetails(
        current_location_coordinates.latitude,
        current_location_coordinates.longitude
      );

      setWeatherDetails(...weather_details, details);

      setIsLoading(false);

      return weather_details;
    })();
  }, []);
}

export default useGetWeatherRequest;
