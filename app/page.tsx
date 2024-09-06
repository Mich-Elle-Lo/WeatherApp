"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import WeatherHistory from "./components/WeatherHistory";
import Hero from "./components/Hero";

export default function Home() {
  const [weatherData, setWeatherData] = useState({ temp: 0, condition: "" });
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=43.7001&lon=-79.4163&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
        );
        console.log(response.data);
        const data = response.data;
        setWeatherData({
          temp: data.main.temp,
          condition: data.weather[0].description,
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeather();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* <Hero /> */}
      <CurrentWeather
        temp={weatherData.temp}
        condition={weatherData.condition}
      />
      <WeatherHistory />
    </div>
  );
}
