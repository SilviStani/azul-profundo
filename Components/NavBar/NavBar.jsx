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
        {/*
        {NavBarData.map((e) => (
          <Link id={e.id} href={e.hrefUrl} target="_blank" key={e.title}>
            {e.src ? (
              <Image
                className="Icons"
                src={e.srcMobile}
                alt={e.title}
                height={35}
                width={35}
              />
            ) : (
              <p>{e.title}</p>
            )}
          </Link>
        ))}
              */}
      </div>
    </nav>
  );
};

export default NavBar;
