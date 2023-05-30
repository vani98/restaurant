import React from "react";
import "./Home.css"
import ProductCard from "../../components/ProductCard";
import { BEST_DEALS_DATA, EVENTS, RECOMMENDED_DATA } from "../constants";
import EventCard from "./EventCard";

const Home = () => {
  return (
    <>
      <div className="home-presentation">
        <h1>The Golden Grill</h1>
        <p>El lugar donde la buena comida y la buena compañía se unen</p>
      </div>
      <div className="home-recommended-dishes">
        <h2>Platos recomendados</h2>
        {RECOMMENDED_DATA.length ? (
          <div className="home-recommended-dishes-card">
            {RECOMMENDED_DATA.map((item) => (
              <ProductCard key={item.id} name={item.name} price={item.price} image={item.image}/>
            ))}
          </div>
        ) : (
          <div>NO DATA</div>
        )}
      </div>
      <div className="home-best-deals">
        <h2>Nuestras mejores ofertas</h2>
        {BEST_DEALS_DATA.length ? (
          <div className="home-best-deals-card">
            {BEST_DEALS_DATA.map((item) => (
              <ProductCard key={item.id} name={item.name} price={item.price} image={item.image}/>
            ))}
          </div>
        ) : (
          <>NO DATA</>
        )}
      </div>
      <div className="home-events">
        <h2>DISFRUTA NUESTROS VIERNES DE EVENTOS</h2>
        {EVENTS.length ? (
          <div className="home-event-card">
            {EVENTS.map((item) => (
              <EventCard key={item.id} name={item.name} store={item.store} guest={item.guest}/>
            ))}
          </div>
        ) : (
          <>NO DATA</>
        )}
      </div>
    </>
  );
};

export default Home;