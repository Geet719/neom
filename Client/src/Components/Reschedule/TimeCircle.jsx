import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function TimeCircle() {
  const initialMinutes = 52;
  const initialSeconds = 59;

  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          if (minutes === 0) {
            setMinutes(initialMinutes);
            return initialSeconds;
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            return initialSeconds;
          }
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes]);

  const timeData = [
    { label: "Days", value: 1, maxValue: 2, color: "#fcd34d" },
    { label: "Hours", value: 14, maxValue: 24, color: "#60a5fa" },
    { label: "Minutes", value: minutes, maxValue: 60, color: "#fb923c" },
    { label: "Seconds", value: seconds, maxValue: 60, color: "#ef4444" },
  ];

  return (
    <div className="absolute w-[400px] mx-auto top-[220px] flex justify-evenly items-center">
      {timeData.map((item, index) => (
        <div key={index} className="flex flex-col items-center w-[80px] h-[80px]">
          <div style={{ width: 80, height: 80 }}>
            <CircularProgressbar
              value={item.value}
              maxValue={item.maxValue}
              text={`${item.value}`}
              styles={buildStyles({
                textColor: "#fff",
                pathColor: item.color,
                trailColor: "#374151",
              })}
            />
          </div>
          <p className="text-sm text-[#ffffff] tracking-wide opacity-80 font-normal mt-1">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
