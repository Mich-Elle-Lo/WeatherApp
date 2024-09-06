type Props = {
  temp: number;
  condition: string;
};

export default function CurrentWeather({ temp, condition }: Props) {
  return (
    <div className="relative  shadow-lg p-8  text-white w-full h-[20rem]">
      <div className="absolute top-4 right-4 text-5xl opacity-20">🌤</div>
      <h1 className="text-4xl font-bold mb-4">Current Weather</h1>
      <div className="flex justify-between items-center">
        <p className="text-6xl font-semibold">Temp: {temp}</p>
        <p className="text-lg font-light capitalize">Condition: {condition}</p>
      </div>
    </div>
  );
}
