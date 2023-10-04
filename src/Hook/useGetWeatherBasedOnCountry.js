import { useEffect } from "react";
let BaseUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;
let api_key = process.env.REACT_APP_API_KEY;

async function useGetWeatherBaseOnCounty(
  weather_details,
  setWeatherDetails,
  setIsLoading,
  countryToSearch
) {
  console.log("working");
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `${BaseUrl}/${countryToSearch}/next5days?unitGroup=metric&include=days%2Ccurrent&key=${api_key}&contentType=json`,
          {
            method: "GET",
          }
        );

        const data = await response.json();
        console.log("COUNTRY", data);
        let details = data;
        setWeatherDetails(...weather_details, details);

        setIsLoading(false);
        return data;
      } catch (err) {
        if (err) {
          console.log(err);
        }
      }

      return weather_details;
    })();
  }, [countryToSearch]);
}

export default useGetWeatherBaseOnCounty;
