import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

function Charts({ altitude, clock, colors }) {
  const [jam, menit, sekon] = clock.split(":").map(Number);
  const default_time = new Date();
  default_time.setHours(jam, menit, sekon, 0);

  const [layout, setLayout] = useState({
    xaxis: { range: [default_time] },
  });

  const [data, setData] = useState([
    {
      x: [default_time],
      y: [altitude],
      mode: "lines",
    },
  ]);

  const telemetry = [];

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date(data[0].x[data[0].x.length - 1]);
      newTime.setSeconds(newTime.getSeconds() + 1);
      const nowTime1 = [newTime];
      const newAltitude = altitude + rand();
      const nowAltitude1 = [newAltitude];
      // telemetry.push({ newTime, newAltitude });
      if (nowTime1.length > 10) {
          nowAltitude1.shift();
          nowTime1.shift();
      }

      setData((prevData) => {
        return [
          {
            x: [...prevData[0].x, newTime],
            y: [...prevData[0].y, newAltitude],
            mode: "lines",
            line: { color: colors },
          },
        ];
      });

      setLayout((prevLayout) => {
        return {
          xaxis: { range: [newTime], ...prevLayout.xaxis },
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [layout.xaxis.range]);

  function rand() {
    return Math.random();
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Charts</h5>
        <p className="card-text">Time Start: {clock}</p>
        <p className="card-text">Altitude : {altitude}</p>
        <Plot data={data} layout={layout} />
      </div>
    </div>
  );
}

export default Charts;
