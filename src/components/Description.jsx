import React from "react";
import "./description.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { BiHappyAlt } from "react-icons/bi";
import { MdCompress } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { GiWindSlap } from "react-icons/gi";

const Description = ({ data, units }) => {
  const tempUnit = units === "metric" ? "°C" : "°F";
  const windUnit = units === "metric" ? "m/s" : "m/h";

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: data.main.temp_min.toFixed(),
      unit: tempUnit,
    },

    {
      id: 2,
      icon: <FaArrowUp />,
      title: "max",
      data: data.main.temp_max.toFixed(),
      unit: tempUnit,
    },

    {
      id: 3,
      icon: <BiHappyAlt />,
      title: "feels like",
      data: data.main.feels_like.toFixed(),
      unit: tempUnit,
    },

    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: data.main.pressure,
      unit: "hPa",
    },

    {
      id: 5,
      icon: <WiHumidity />,
      title: "humidity",
      data: data.main.humidity,
      unit: "%",
    },

    {
      id: 6,
      icon: <GiWindSlap />,
      title: "wind speed",
      data: data.wind.speed,
      unit: windUnit,
    },
  ];
  return (
    <div className="section section__desc">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div className="card">
          <div key={id} className="desc__card-icon">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  );
};

export default Description;
