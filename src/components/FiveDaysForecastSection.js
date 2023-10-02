import DailyWeatherDetailsCard from "./DailyWeatherDetailsCard";

function FiveDaysForecastSection({ weather_details }) {
  console.log("five", weather_details);
  return (
    <section className=" w-75 row justify-content-center  text-center text-white ">
      {weather_details.days.map((day) => {
        let day_index = weather_details.days.indexOf(day);

        // exclude the first element
        if (day_index !== 0) {
          return <DailyWeatherDetailsCard day_details={day} />;
        }
      })}
    </section>
  );
}

export default FiveDaysForecastSection;
