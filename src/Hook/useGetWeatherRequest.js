import { useEffect, useState } from "react";
let BaseUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;
let api_key = process.env.REACT_APP_API_KEY;

async function useGetWeatherRequest(
  weather_details,
  setWeatherDetails,
  setIsLoading,
  countryToSearch
) {
  useEffect(() => {
    (async () => {
      let location = countryToSearch;
      console.log("getting data...");
      setIsLoading(true);
      try {
        const response = await fetch(
          `${BaseUrl}/${location}/next5days?unitGroup=metric&include=days%2Ccurrent&key=${api_key}&contentType=json`,
          {
            method: "GET",
          }
        );

        const data = await response.json();
        console.log("new DATA", data);
        let details = data;
        setWeatherDetails(details);

        setIsLoading(false);

        return weather_details;
      } catch (err) {
        if (err) {
          console.log(err);
        }
      }
    })();
  }, [countryToSearch]);
}

export default useGetWeatherRequest;
