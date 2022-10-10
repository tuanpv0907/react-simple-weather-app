import React from "react";

const MainTemp = ({ data, units }) => {
  return (
    <div className="section section__temp">
      <div className="icon">
        <h3>{`${data.name}, ${data.sys.country}`}</h3>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="weatherIcon"
        />
        <h3>{data.weather[0].main}</h3>
      </div>
      <div className="temp">
        <h1>{`${data.main.temp.toFixed()}° ${units === "metric" ? "C" : "F"}`}</h1>
      </div>
    </div>
  );
};

export default MainTemp;
