# Toronto Weather App

This is a Next.js app that displays the current weather for Toronto. The app fetches weather data from the OpenWeatherMap API and updates consistently to ensure the most recent weather information is always available.

You can view the app [here](https://weather-app-phi-indol-75.vercel.app/).

## Features

- Displays current weather conditions for Toronto.
- Auto-updates to show the latest data.
- Includes a Play/Pause button to control automatic updates.
- Responsive design using Tailwind CSS for mobile and desktop views.
- Users can view a 5-day historical weather chart.
- Snapshots allow saving and viewing recent weather conditions.
- Embedded YouTube forecast video for a detailed weather forecast.

## Getting Started

To get started, clone the repository and install the dependencies:

```bash
git clone <https://github.com/Mich-Elle-Lo/WeatherApp>
cd weather-app
npm install
npm run dev

## Environment Variables

Make sure you have the following environment variables set in your .env.local file:
NEXT_PUBLIC_OPENWEATHERMAP_API_KEY=your_api_key_here

## Folder Structure

	•	app/page.tsx: The main page for weather display.
	•	components/CurrentWeather.tsx: Component to show the current temperature and condition.
	•	components/WeatherHistory.tsx: Displays the historical weather in chart format.
	•	components/Snapshot.tsx: Allows users to save and view weather snapshots.
	•	components/Hero.tsx: Contains a YouTube video forecast for Toronto.
```
