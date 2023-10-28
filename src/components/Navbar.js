import React, { useState } from "react";
import Link from "next/link";
import * as CgIcons from "react-icons/cg";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { FaBlackTie } from "react-icons/fa";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div  class="navbar navbar-expand-lg ">
        <IconContext.Provider value={{ color: "#f5f5f5"}}>
          <div className="menu-container">
            <CgIcons.CgMenuGridR onClick={showSidebar} className="menu-icon" />
            <span className="menu-text">Menu</span>
          </div>
        </IconContext.Provider>
      </div>
      <nav className={sidebar ? "nav-menu" : "nav-menu-active"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <IconContext.Provider value={{ color: "#fff" }}>
              <div className="menu-bars" onClick={showSidebar}>
                <AiIcons.AiOutlineClose />
              </div>
            </IconContext.Provider>
          </li>
          {SidebarData.map((item, index) => (
            <li key={index} className={item.className}>
              <Link href={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
