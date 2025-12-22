import React from "react";
import "./MainPage.scss";
import Image from "next/image";
import Link from "next/link";
import { NavBarData } from "../NavBar/NavBarData";

const MainPage = () => {
  return (
    <div className="MainWrapper">
      <div className="leftContainer">
        <h1>AZUL PROFUNDO</h1>
        <h2>EMPRESA DE MANTENIMIENTO INTEGRAL DE PISCINAS Y AFINES</h2>
        <h2>Pileteros profesionales</h2>
        <p>
          Le damos la bienvenida a nuestro sitio web donde podrá acceder a toda
          la información <br /> sobre los servicios que ofrece nuestra empresa
          en Villa General Belgrano y alrededores.
        </p>
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
              <Link
                href={e.hrefUrl}
                target="_blank"
                key={e.id}
                className="socialMobile"
              >
                <Image
                  src={e.srcMobile}
                  alt={e.title}
                  height={50}
                  width={50}
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
