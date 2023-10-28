import React from "react";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.css";

function Maps() {
  const MapTeamWithNoSSR = dynamic(() => import("../components/MapCustom"), {
    ssr: false,
  });
  const NavbarWithNoSSR = dynamic(() => import("../components/Navbar"), {
    ssr: false,
  });

  const position = [-7.765945, 110.371374];
  const position_jogja = [-7.795524088801834, 110.36827520679236];
  const position_ugm = [-7.7692167500244524, 110.37755309466483];
  const position_gmat = [-7.773534015317365, 110.37829352319294];
  const nama = "Team";
  const nama_ugm = "Universitas gadjah Mada";
  const nama_jogja = "Yogyakarta";
  const nama_gmat = "Aerospace Team"

  return (
    <section>
        <NavbarWithNoSSR />
      <div className="container d-flex">
        <div className="row container d-flex">
          <div className="col">
            <MapTeamWithNoSSR position={position} nama={nama} />
          </div>
          <div className="col">
            <MapTeamWithNoSSR position={position_ugm} nama={nama_ugm} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <MapTeamWithNoSSR position={position_jogja} nama={nama_jogja} />
          </div>
          <div className="col">
          <MapTeamWithNoSSR position={position_gmat} nama={nama_gmat} />
          </div>
        </div>
        </div>
    </section>
  );
}

export default Maps;
