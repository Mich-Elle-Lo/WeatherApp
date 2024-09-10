import { useEffect, useState } from "react";
type Props = { temp: number; condition: string };

type SnapshotData = {
  temp: number;
  condition: string;
  timestamp: string;
};

export default function Snapshot({ temp, condition }: Props) {
  const [snapshotData, setSnapshotData] = useState<SnapshotData[]>([]);

  useEffect(() => {
    const savedSnapshots = localStorage.getItem("snapshots");

    if (savedSnapshots) {
      setSnapshotData(JSON.parse(savedSnapshots));
      console.log("snapshot", JSON.parse(savedSnapshots));
    }
  }, []);

  const saveSnapshot = () => {
    const newSnapshot = {
      temp,
      condition,
      timestamp: new Date().toLocaleString(),
    };

    const newSnapshotData = [newSnapshot, ...snapshotData].slice(0, 5);
    setSnapshotData(newSnapshotData);
    localStorage.setItem("snapshots", JSON.stringify(newSnapshotData));

    console.log("new snapshot data", newSnapshotData);
  };

  return (
    <div className="flex flex-col items-center gap-4 z-50">
      <h2 className="text-2xl font-bold">Snapshot</h2>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <p>Temperature: {temp}°C</p>
          <p>Condition: {condition}</p>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={saveSnapshot}
        >
          Save Snapshot
        </button>
      </div>
      <div>
        <h3 className="text-lg font-bold">Saved Snapshots</h3>
        <ul className="list-disc pl-8 flex">
          {snapshotData.map((snapshot, index) => (
            <li key={index}>
              <p>
                <span className="font-bold">Temperature:</span> {snapshot.temp}
                °C
              </p>
              <p>
                <span className="font-bold">Condition:</span>{" "}
                {snapshot.condition}
              </p>
              <p>
                <span className="font-bold">Timestamp:</span>{" "}
                {snapshot.timestamp}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
