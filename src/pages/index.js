import React from "react";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import NewCharts from "@/components/NewChart";




export default function Home() {
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
  });
  const Charts2WithNoSSR = dynamic(() => import("../components/Charts2"), {
    ssr: false,
  });
  const NavbarWithNoSSR = dynamic(() => import("../components/Navbar"), {
    ssr: false,
  });


  return (
    <main>
      <div>
        <NavbarWithNoSSR />
        <div className="container" style={{ marginTop: "60px" }}>
          <h3 className="text-2xl font-bold" style={{ marginBottom: "10px" }}>
            Real Time Maps
          </h3>
          <MapWithNoSSR />
        </div>
        <div className="container" style={{ marginTop: "30px" }}>
          <h3 className="text-2xl font-bold" style={{ marginBottom: "20px" }}>
            Real Time Charts
          </h3>
          <NewCharts/>
          <Charts2WithNoSSR />
        </div>
      </div>
    </main>
  );
}
