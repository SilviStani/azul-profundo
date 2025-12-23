import React from "react";
import "./NavBar.scss";
import Image from "next/image";
import Link from "next/link";
import { NavBarData } from "./NavBarData.js";

const NavBar = () => {
  return (
    <nav className="navBarMain">
      <div className="NameLogo">
        <div className="logoTextContainer">
          <Link href={"/"}>
            <h4>Azul Profundo</h4>
            <p>limpieza piscinas</p>
          </Link>
        </div>
      </div>
      <div className="RightLogo">
        {NavBarData.map((e) => (
          <Link 
          id={e.id} 
          href={e.hrefUrl} 
          key={e.title}>
            {<p>{e.title}</p>}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
