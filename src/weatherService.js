import axios from "axios";

const API_KEY = "97f32360d7b73af74b6e1b48cf8b1c54";
const URL = "https://api.openweathermap.org/data/2.5/weather?";

export const fetchWeather = async (city, units) => {
  const { data } = await axios.get(URL, {
    params: {
      q: city,
      appid: API_KEY,
      units,
    },
  });

  return data;
};
