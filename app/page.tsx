"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import WeatherHistory from "./components/WeatherHistory";
import Snapshot from "./components/Snapshot";
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
    <div className="h-screen">
      {/* <Hero /> */}
      <div
        className="fixed w-full h-screen bg-cover bg-fixed z-[-1] opacity-90 "
        style={{
          backgroundImage: `url('/lightbg.jpeg')`,
        }}
      >
        {" "}
      </div>
      <div className="flex flex-col items-center justify-center h-screen relative text-white z-50">
        <div className="text-center p-6 text-white">
          <h1 className="text-5xl font-bold mb-4">Weather in Toronto</h1>
          <p className="text-lg">Your daily Toronto weather insights.</p>
        </div>

        <div className="flex flex-col gap-3 justify-center mt-8">
          <CurrentWeather
            temp={weatherData.temp}
            condition={weatherData.condition}
          />
        </div>
        <div className="flex justify-center mt-8 w-[75vh]">
          {" "}
          <WeatherHistory />
        </div>
        <div className="flex justify-center h-[15rem] mt-8 w-[75vh]  ">
          {" "}
          <Snapshot temp={weatherData.temp} condition={weatherData.condition} />
        </div>
      </div>
    </div>
  );
}
