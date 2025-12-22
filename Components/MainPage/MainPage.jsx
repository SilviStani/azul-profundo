import React from "react";
import "./MainPage.scss";
import Image from "next/image";
import Link from "next/link";
import { NavBarData } from "../NavBar/NavBarData";

const MainPage = () => {
  return (
    <div className="MainWrapper">
      <div className="leftContainer">
        <h1>Azul Profundo</h1>
        <h2>Su Piscina Perfecta, Sin Esfuerzo.</h2>
        <Link
          href={
            "https://api.whatsapp.com/send/?phone=5491165533520&text=Hola%21+Podrias+pasarme+un+presupuesto%3F+Me+interesa+su+servicio."
          }
          target="_blank"
          className="link"
        >
          <button className="buttonOrange">Reserva Tu Limpieza HOY</button>
        </Link>
        <div className="socialIcons">
          {NavBarData.map((e) => {
            if (!e.src) return null;
            return (
              <Link href={e.hrefUrl} target="_blank" key={e.id} className="socialMobile">
                <Image
                  src={e.srcMobile}
                  alt={e.title}
                  height={45}
                  width={45}
                  className="Icons"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
