import React from "react";
import { STORES } from "../constants";
import "./AboutUs.css"
import StoreCard from "./StoreCard/StoreCard";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-presentation">
        <div className="who-whe-are">
          <h2>¿QUIENES SOMOS?</h2>
          <p className="who-we-are-text">
            Somos un equipo de amantes de la comida apasionados por crear
            experiencias gastronómicas memorables para nuestros clientes. Nos
            enorgullece ofrecer una amplia variedad de platos deliciosos
            preparados con ingredientes frescos y de alta calidad, para satisfacer
            los paladares más exigentes.
          </p>
          <p className="who-we-are-text">
            Nuestra filosofía se basa en el respeto a los ingredientes y la
            creatividad en la cocina para crear platos únicos y deliciosos.
            Queremos que cada visita a nuestro restaurante sea una experiencia
            única, donde la buena comida y el excelente servicio se combinen para
            hacer de cada comida una celebración.
          </p>
          <p>¡Ven y descubre lo que tenemos para ofrecerte!</p>
        </div>
        </div>
      <div className="about-us-store">
        <h2>Nuestras sucursales se encuentran en...</h2>
        {STORES.length ? (
          <div className="stores">
            {STORES.map((store,index) => (
              <StoreCard key={`${store.name}-${index}`} name={store.name} address={store.address} phone={store.phone}/>
            ))}
          </div>
        ) : (
          <>NO DATA</>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
