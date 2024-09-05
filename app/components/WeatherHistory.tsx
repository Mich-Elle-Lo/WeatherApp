import axios from "axios";
import { useEffect, useState } from "react";

type Props = { date: string; maxTemp: number; minTemp: number };

export default function WeatherHistory({}: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchWeatherHistory = async () => {
      try {
        const response = await axios.get(
          `https://historical-forecast-api.open-meteo.com/v1/forecast?latitude=43.7001&longitude=-79.4163&start_date=2024-09-01&end_date=2024-09-05&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=America%2FNew_York`
        );
        console.log(response.data);
        const formattedData = response.data.daily.time.map((date, index) => ({
          date,
          maxTemp: response.data.daily.temperature_2m_max[index],
          minTemp: response.data.daily.temperature_2m_min[index],
        }));
        setData(formattedData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeatherHistory();
  }, []);

  return (
    <div>
      <h1>WeatherHistory</h1>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        data.map((weather, index) => (
          <div key={index}>
            <p>Date: {weather.date}</p>
            <p>Max Temp: {weather.maxTemp}°C</p>
            <p>Min Temp: {weather.minTemp}°C</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
