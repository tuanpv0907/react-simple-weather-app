import hotBg from "./assets/hot.jpg";
import coldBg from "./assets/cold.jpg";
import Description from "./components/Description";
import { useEffect, useState } from "react";
import SearchCity from "./components/SearchCity";
import MainTemp from "./components/MainTemp";
import { fetchWeather } from "./weatherService";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(hotBg);

  useEffect(() => {
    const fetchDataWeather = async () => {
      const dataWeather = await fetchWeather(city, units);
      setData(dataWeather);
      console.log(dataWeather);

      const thresbold = units === "metric" ? 20 : 60;
      if (dataWeather.main.temp <= thresbold) setBg(coldBg);
      else setBg(hotBg);
    };

    fetchDataWeather();
  }, [units, city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    const isCelcius = currentUnit === "C";
    button.innerText = isCelcius ? "°F" : "°C";
    setUnits(isCelcius ? "metric" : "imperial");
  };

  const enterKeyPressed = (e) => {
    if (e.key === "Enter") {
      setCity(e.target.value);
      e.target.blur();
    }
  };
  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        <div className="container">
          <SearchCity
            city={city}
            setCity={setCity}
            enterKeyPressed={enterKeyPressed}
            handleUnitsClick={handleUnitsClick}
          />

          {data && (
            <>
              <MainTemp data={data} units={units} />
              <Description data={data} units={units} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
