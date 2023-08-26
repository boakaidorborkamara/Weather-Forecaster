import { React, useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Search from "./components/Search";
import DailyCards from "./components/DailyCards";
import DetailTable from "./components/DetailsTable";
import TempertureArea from "./components/TempertureArea";
import StateName from "./components/StateName";
import { Container, Row } from "react-bootstrap";

function App() {
  // async function getWeatherData() {
  //   const response = await fetch(
  //     "https://api.openweathermap.org/data/2.5/weather?q=Ganta&appid=1a5274f0df36b83fab88e81db9b5fb67"
  //   );

  //   const data = await response.json();
  //   if (response.ok) {
  //     console.log(data);
  //     return data;
  //   } else {
  //     console.log("Didn't fetch");
  //   }
  // }

  let [weather_info, setWeatherInfo] = useState("");

  useEffect(() => {
    (async function getWeatherData() {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Ganta&appid=1a5274f0df36b83fab88e81db9b5fb67"
      );

      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setWeatherInfo(data);
        console.log("WEATHER INFO", weather_info.name);
        return data;
      } else {
        console.log("Didn't fetch");
      }
    })();
  }, []);

  return (
    <div>
      <SearchBar />
      <Container>
        {/* first section  */}

        <div className="border p-5 bg-white mt-5 rounded-2">
          {/* city name  */}
          <Row className="text-end pb-4">
            <Search />
            <StateName state_name={weather_info} />
          </Row>

          {/* right side  */}
          <Row>
            <TempertureArea />
            <DetailTable />
          </Row>
        </div>

        {/* second section  */}
        <div className="border mt-3 p-5 bg-white rounded-2">
          <Row>
            <h3 className="text-center pb-3">5 Days Forecast</h3>
            <DailyCards />
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;
