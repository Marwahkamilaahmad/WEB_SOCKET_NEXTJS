import React from "react";
import dynamic from "next/dynamic";

function Info() {
  const NavbarWithNoSSR = dynamic(() => import("../components/Navbar"), {
    ssr: false,
  });
  return (
    <section>
      <NavbarWithNoSSR/>
      <div className="container" style={{margin : '30px'}}>
        <h3>this apps made with Next Js</h3>
        <h4>by : Marwah Kamila Ahmad</h4>
      </div>
    </section>
  );
}

export default Info;
