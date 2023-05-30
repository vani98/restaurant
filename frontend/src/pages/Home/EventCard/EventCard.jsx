import React from "react";
import "./EventCard.css"

const EventCard = ({name,store,guest}) => {
  return (
   <>
        <div className="event-card">
            <p className="event-card-name">{name}</p>
            <p className="event-card-store">{store}</p>
            <p className="event-card-guest">{guest}</p>
        </div>
    </>
  );
};

export default EventCard;