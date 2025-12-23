import React from "react";
import { Galeria } from "./Galeria";
import Image from "next/image";
import "./Galeria.scss";
import NavBar from "../../../Components/NavBar/NavBar";

const page = () => {
  return (
    <div className="Container">
      <NavBar/>
      <div className="gridContainer">
        <h1>Nuestras Piscinas: Impecables</h1>
        {Galeria.map((e) =>
          e.title.includes("limpias") ? (
            <Image
              key={e.id}
              src={e.src}
              alt={e.title}
              height={400}
              width={300}
              objectFit="cover"
              className="imagen"
            />
          ) : null
        )}
      </div>
      <div className="gridContainer">
        <h1>Nuestras Piscinas: Antes, Durante y Después del Tratamiento</h1>
        {Galeria.map((e) =>
          e.title.includes("antesDesp") ? (
            <div key={e.id}>
              <Image
                src={e.src}
                alt={e.title}
                height={400}
                width={300}
                objectFit="cover"
                className="imagen"
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default page;
