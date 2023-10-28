import React from "react";
import dynamic from "next/dynamic";
import io from "socket.io-client";
import { useState, useEffect } from "react";

const ChartsWithNoSSR = dynamic(() => import("../components/ChartsCustom"), {
  ssr: false,
});
const ChartsNewWithNoSSR = dynamic(() => import("../components/NewChart"), {
  ssr: false,
});
const NavbarWithNoSSR = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});

function ChartsTelemetry() {
  const socket = io("https://gmat.haikalhilmi.my.id"); 
  socket.connect()
  // const [telemetryData, setTelemetryData] = useState([]);

  useEffect(() => {

    socket.on("connect", ()=>{
      console.log("connected")
    })
    socket.on("message", (data) => {
      console.log("Pesan dari server:", data);})})

  //     const {
  //       TEAM_ID,
  //       CLOCK,
  //       YAW,
  //       PITCH,
  //       ROLL,
  //       GPS_LATITUDE,
  //       GPS_LONGITUDE,
  //       VOLTAGE,
  //       PRESSURE,
  //       ALTITUDE,
  //     } = data.split(",");

  //     const telemetryData = {
  //       TEAM_ID,
  //       CLOCK,
  //       YAW,
  //       PITCH,
  //       ROLL,
  //       GPS_LATITUDE,
  //       GPS_LONGITUDE,
  //       VOLTAGE,
  //       PRESSURE,
  //       ALTITUDE,
  //     };
      
  //     setTelemetryData(telemetryData);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  const clock0 = "10:27:03";
  const clock1 = "21:10:06";
  const clock2 = "07:09:21";
  const color_red = "#C70039";
  const color_blue = "#8E8FFA";
  const color_green = "#1A5D1A";

  return (
    <section>
      <NavbarWithNoSSR />
      <div className="container" style={{ marginTop: "60px" }}>
        <div>
          <ChartsWithNoSSR clock={clock0} colors={color_red} altitude={200} />
        </div>
      </div>
      <div className="container" style={{ marginTop: "30px" }}>
        <div>
          <ChartsWithNoSSR clock={clock1} colors={color_blue} altitude={400} />
        </div>
      </div>
      <div  className="container" style={{ marginTop: "30px" }}>
        <div>
          <ChartsWithNoSSR clock={clock2} colors={color_green} altitude={600} />
        </div>
      </div>
      <div  className="container" style={{ marginTop: "30px" }}>
        <div>
          <ChartsNewWithNoSSR />
        </div>
      </div>
    </section>
  );
}

export default ChartsTelemetry;
