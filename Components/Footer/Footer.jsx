'use client';
import React from "react";
import "./Footer.scss";
import Image from "next/image";
import Link from "next/link";

let date = new Date().getFullYear();

const Footer = () => {
    return (
        <div className="FooterContainer">
            <h3>Listo para disfrutar de una piscina PERFECTA?</h3>
            <Link
                href="https://api.whatsapp.com/send/?phone=5491165533520&text=Hola%21+Podrias+pasarme+un+presupuesto%3F+Me+interesa+su+servicio."
                target="_blank"
            >
                <button>
                    <Image
                        src="/whatsappMobile.png"
                        alt="whatsapp logo"
                        height={30}
                        width={30}
                        className="img"
                    />
                    Reserva tu Limpieza Ahora
                </button>
            </Link>
            <div className="textContainer">
                <p>
                    {date} Azul Profundo - Limpieza de Piscinas ~ Todos los derechos reservados.
                </p>
                <span>
                    <Link
                        href=
                        "https://api.whatsapp.com/send/?phone=5491165533520&text=Hola%21+Podrias+pasarme+un+presupuesto%3F+Me+interesa+su+servicio."
                        target="_blank">
                        <Image
                            src="/whatsappMobile.png"
                            alt="whatsapp logo"
                            height={30}
                            width={30}
                            className="imgBottom"
                        />
                    </Link>
                    <Link
                        href="https://www.instagram.com/mantenimiento.piscinas.vgb/"
                        target="_blank">
                        <Image
                            src="/instagramMobile.png"
                            alt="Instagram logo"
                            height={30}
                            width={30}
                            className="imgBottom"
                        />
                    </Link>
                </span>
            </div>
        </div >
    );
};

export default Footer;
