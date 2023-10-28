// // <<<<<<<<<<<>>>>>>>>></>

// import dynamic from "next/dynamic";
// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import { io } from "socket.io-client";

// const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// function Charts() {
//   const socket = io("https://gmat.haikalhilmi.my.id");
//   socket.connect();

//   // Inisialisasi data awal
//   const initialData = {
//     x: [],
//     y: [],
//     mode: "lines",
//   };

//   const [data, setData] = useState([initialData]);
//   const [layout, setLayout] = useState({
//     xaxis: { range: [] },
//   });

//   useEffect(() => {
//     socket.on("connect", () => {
//       console.log("Connected to server");
//     });

//     socket.on("message", (telemetry) => {
//       console.log(telemetry);
//       const telemetryData = [];
//     //   telemetryData.push(telemetry);

//     const interval = setInterval(() => {
//       const dataTelemetry = telemetry.split(",");
//       const clock = dataTelemetry[1];
//       const altitude = parseFloat(dataTelemetry[9]);
//       const [jam, menit, sekon] = clock.split(":").map(Number);

//       // Atur waktu awal
//       const default_time = new Date();
//       default_time.setHours(jam, menit, sekon, 0);

//       // Inisialisasi interval untuk memperbarui data setiap detik

//         const newTime = new Date(); // Waktu saat ini
//         const newAltitude = altitude;

//         telemetryData.push({ time: newTime, newAltitude });

//         if (telemetryData.length > 3) {
//             telemetryData.shift();
//             telemetryData.reverse().pop();
//           }

//         setData((prevData) => {
//           return [
//             {
//               x: [...prevData[0].x, newTime],
//               y: [...prevData[0].y, newAltitude],
//               mode: "lines",
//               line: { color: "#C70039" },
//             },
//           ];
//         });

//         setLayout(() => {
//           return {
//             xaxis: { range: [newTime] },
//           };
//         });
//       }, 10000);

//       // Membersihkan interval ketika komponen tidak digunakan lagi
//       return () => clearInterval(interval);
//     });
//   }, [socket]);

//   return (
//     <div className="card">
//       <div className="card-body">
//         <h5 className="card-title">Charts</h5>
//         <Plot data={data} layout={layout} />
//       </div>
//     </div>
//   );
// }

// export default Charts;

import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { io } from "socket.io-client";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

function NewCharts() {
  const socket = io("https://gmat.haikalhilmi.my.id");
  socket.connect();

  const [data, setData] = useState({
    x: [],
    y: [],
    mode: "lines",
  });

  const telemetryData = [];

  useEffect(() => {
    const interval = setInterval(() => {
      socket.on("connect", () => {
        console.log("Connected to server");
      });

      socket.on("message", (telemetry) => {
        const dataTelemetry = telemetry.split(",");
        const clock = dataTelemetry[1];
        const altitude = parseFloat(dataTelemetry[9]);
        const [jam, menit, sekon] = clock.split(":").map(Number);

        const default_time = new Date();
        default_time.setHours(jam, menit, sekon, 0);

        telemetryData.push({ time: default_time, altitude });

        if (telemetryData.length > 3) {
          telemetryData.shift();
        }

        const dataPoints = telemetryData.map((data) => ({
          x: data.time,
          y: data.altitude,
        }));

        setData({
          x: dataPoints.map((d) => d.x),
          y: dataPoints.map((d) => d.y),
          mode: "lines",
          line: { color: "#C70039" },
        });
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [socket]);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">listening socket</h5>
        <Plot
          data={[data]} // Perhatikan bahwa data harus berada dalam array
          layout={{ width: 700, height: 500 }}
        />
      </div>
    </div>
  );
}

export default NewCharts;

