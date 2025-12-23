import React from "react";
import "./MainGallery.scss";
import Image from "next/image";

const MainGallery = () => {
  return (
    <div className="Container">
      <h1>Galería de Trabajos</h1>
      <p>Algunos de nuestros trabajos realizados</p>
      <div className="gridContainer">
        <Image
        src = "/antesDesp/antesdesp.jpeg"
        alt = "Antes y Después, limpieza piscina"
        height={200}
        width={200}
        objectFit="cover"
        className="img"
        />
        <Image
        src = "/limpias/piscinalimpia2.jpeg"
        alt = "Antes y Después, limpieza piscina"
        height={200}
        width={200}
        objectFit="contain"
        className="img"
        />
        <Image
        src = "/limpias/piscinalimpia.jpeg"
        alt = "Antes y Después, limpieza piscina"
        height={200}
        width={200}
        objectFit="cover"
        className="img"
        />
      </div>
    </div>
  );
};

export default MainGallery;
