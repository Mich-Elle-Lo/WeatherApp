import { useEffect, useState } from "react";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
type Props = {
  temp: number;
  condition: string;
};

export default function CurrentWeather({ temp, condition }: Props) {
  const [isUpdating, setIsUpdating] = useState(true);
  const [timestamp, setTimestamp] = useState(new Date());

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isUpdating) {
      interval = setInterval(() => {
        setTimestamp(new Date());
      }, 0);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isUpdating]);

  const toggleUpdate = () => {
    setIsUpdating(!isUpdating);
  };

  return (
    <div className="relative  shadow-lg p-8  text-white w-full h-[20rem] bg-black bg-opacity-30 rounded-lg ">
      <div className="absolute top-4 right-4 text-5xl opacity-20">🌤</div>
      <h1 className="text-4xl font-bold mb-4">Current Weather</h1>
      <div className="flex justify-between items-center">
        <p className="text-6xl font-semibold">Temp: {temp}</p>
        <p className="text-lg font-light capitalize">Condition: {condition}</p>
      </div>
      <p className="text-sm mt-4">
        Last updated: {timestamp.toLocaleTimeString()}
      </p>

      <button
        className="mt-4 p-[.4rem] flex items-center justify-center bg-transparent border border-white text-white rounded-full hover:bg-opacity-20 hover:bg-white transition-opacity"
        onClick={toggleUpdate}
      >
        {isUpdating ? (
          <PauseIcon className="h-5 w-5 " />
        ) : (
          <PlayIcon className="h-5 w-5 " />
        )}
      </button>
    </div>
  );
}
