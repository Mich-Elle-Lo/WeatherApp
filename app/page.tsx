"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import WeatherHistory from "./components/WeatherHistory";
import Snapshot from "./components/Snapshot";
import Hero from "./components/Hero";

export default function Home() {
  const [weatherData, setWeatherData] = useState({ temp: 0, condition: "" });
  const [activeTab, setActiveTab] = useState("current");

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
        className="fixed w-full h-screen bg-cover bg-fixed z-[-1] opacity-60 "
        style={{
          backgroundImage: `url('/lightbg.jpeg')`,
        }}
      ></div>
      <div className="flex flex-col items-center justify-center h-screen relative text-white w-full ">
        <div className="text-center p-6 text-white">
          <h1 className="text-5xl font-bold mb-4">Weather in Toronto</h1>
          <p className="text-lg">Your daily Toronto weather insights.</p>
        </div>
        <div className="flex space-x-4 mt-8">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setActiveTab("current")}
          >
            Current Weather
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setActiveTab("history")}
          >
            Weather History
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setActiveTab("snapshot")}
          >
            Weather Snapshot
          </button>
        </div>
        <div className="mt-8 px-5 sm:w-[80vh] md:w-[70vh] ">
          {activeTab === "current" && (
            <CurrentWeather
              temp={weatherData.temp}
              condition={weatherData.condition}
            />
          )}
          {activeTab === "history" && <WeatherHistory />}
          {activeTab === "snapshot" && (
            <Snapshot
              temp={weatherData.temp}
              condition={weatherData.condition}
            />
          )}
        </div>
      </div>
    </div>
  );
}
