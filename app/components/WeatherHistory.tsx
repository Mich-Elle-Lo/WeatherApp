import axios from "axios";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";

type Props = { date: string; maxTemp: number; minTemp: number; index: number };

export default function WeatherHistory({}: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchWeatherHistory = async () => {
      try {
        const response = await axios.get(
          `https://historical-forecast-api.open-meteo.com/v1/forecast?latitude=43.7001&longitude=-79.4163&start_date=2024-09-01&end_date=2024-09-05&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=America%2FNew_York`
        );
        console.log(response.data);
        const formattedData = response.data.daily.time.map(
          (date: string, index: number) => ({
            date,
            maxTemp: response.data.daily.temperature_2m_max[index],
            minTemp: response.data.daily.temperature_2m_min[index],
          })
        );
        setData(formattedData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeatherHistory();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="maxTemp" stroke="#8884d8" />
        <Line type="monotone" dataKey="minTemp" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
