import TodayHighlightCard from "./TodayHighlightCard";

function TodayHighlightSection({ weather_details }) {
  return (
    <section className="w-75 d-flex flex-column text-center text-white">
      <div className="d-flex flex-wrap justify-content-center ">
        {/* section header  */}
        <h4 className=" col-10 pt-5 m-2 text-start">Today's Highlights</h4>

        {/*  today's hightlight cards  */}
        <TodayHighlightCard
          card_name="Windspeed"
          value={weather_details.currentConditions.windspeed}
          measurement={"mph"}
        />
        <TodayHighlightCard
          card_name="Humidity"
          value={weather_details.currentConditions.humidity}
          measurement={"%"}
        />
        <TodayHighlightCard
          card_name="Visibility"
          value={weather_details.currentConditions.visibility}
          measurement={"miles"}
        />
        <TodayHighlightCard
          card_name="Air Pressure"
          value={weather_details.currentConditions.pressure}
          measurement={"mb"}
        />
      </div>
    </section>
  );
}

export default TodayHighlightSection;
