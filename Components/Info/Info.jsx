import React from "react";
import "./Info.scss";
import { InfoData } from "./InfoData";
import Link from "next/link";

const Info = () => {
  return (
    <div className="InfoWrapper" id="servicios">
      {InfoData.map((e) => (
        <Link href={e.urlWhats} target="_blank" key={e.title}>
          <div
            className="card"
            id={e.id}
            style={{
              backgroundImage: `url(${e.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="textContainer">
              <h3>{e.title}</h3>
              <p>{e.descr}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Info;
