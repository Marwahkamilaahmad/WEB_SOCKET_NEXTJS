import { getLocalDataTeam } from "@/localDataTeam";
import React from "react";
import dynamic from "next/dynamic";
import NewCharts from "@/components/NewChart";

function Team({ localDataTeam }) {
  const MapTeamWithNoSSR = dynamic(() => import("../components/MapCustom"), {
    ssr: false,
  });
  const NavbarWithNoSSR = dynamic(() => import("../components/Navbar"), {
    ssr: false,
  });
  const ChartsWithNoSSR = dynamic(() => import("../components/ChartsCustom"), {
    ssr: false,
  });

  const color = "#F94C10";

  const position = [localDataTeam.gps_latitude, localDataTeam.gps_longitude];

  return (
    <section>
      <NavbarWithNoSSR />
      <div>
        <div style={{marginTop : '30px'}}>
        <ul style={{listStyle: 'none'}}>
          <li >Team ID : {localDataTeam.team_id}</li>
          <li>Clock : {localDataTeam.clock}</li>
          <li>Latitude : {localDataTeam.gps_latitude}</li>
          <li>Longitude : {localDataTeam.gps_longitude}</li>
          <li>Altitude : {localDataTeam.altitude}</li>
        </ul>
        </div>
        <MapTeamWithNoSSR position={position} />
      </div>
      <div className="container">
        <NewCharts />
      </div>
      <div className="container">
        <ChartsWithNoSSR clock={localDataTeam.clock} colors = {color} altitude={localDataTeam.altitude} />
      </div>
      <div className="container">
      <h3>Team Lain</h3>
        <ChartsWithNoSSR clock={localDataTeam.clock} colors = {color} altitude={400} />
      </div>
    </section>
  );
}

export default Team;

export async function getServerSideProps(context) {
  const localDataTeam = await getLocalDataTeam();

  return {
    props: { localDataTeam },
  };
}
