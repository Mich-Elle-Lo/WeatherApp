import axios from "axios";
import { use, useEffect, useState } from "react";

type Props = {};

export default function WeatherHistory({}: Props) {
  useEffect(() => {
    const fetchWeatherHistory = async () => {
      try {
        const response = await axios.get(
          `https://historical-forecast-api.open-meteo.com/v1/forecast?latitude=43.7001&longitude=-79.4163&start_date=2024-09-01&end_date=2024-09-05&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=America%2FNew_York`
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeatherHistory();
  }, []);

  return <div>WeatherHistory</div>;
}
