import React from "react";
import "./MainPage.scss";
import Image from "next/image";
import Link from "next/link";

const MainPage = () => {
  return (
    <div className="MainWrapper">
      <div className="leftContainer">
        <h1>AZUL PROFUNDO</h1>
        <h3>EMPRESA DE MANTENIMIENTO INTEGRAL DE PISCINAS Y AFINES</h3>
        <h3>Pileteros profesionales</h3>
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
          <Link
            href="https://api.whatsapp.com/send/?phone=5491165533520&text=Hola%21+Podrias+pasarme+un+presupuesto%3F+Me+interesa+su+servicio."
            target="_blank"
            key="WhatsApp"
            className="socialMobile"
          >
            <Image
              src="/whatsappMobile.png"
              alt="WhatsApp logo. Click para enviar mensaje."
              height={50}
              width={50}
              className="Icons"
            />
          </Link>
          <Link
          href= "https://www.instagram.com/mantenimiento.piscinas.vgb/"
          target="_blank"
          key="Instagram"
          className="socialMobile"
          >
          <Image
            src="/instagramMobile.png"
            alt="Instagram logo. Click para ver página."
            height={50}
            width={50}
            className="Icons"
          />
        </Link>
      </div>
    </div>
    </div >
  );
};

export default MainPage;
