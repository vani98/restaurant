import React from "react";
import "./StoreCard.css"

const StoreCards = ({name,address,phone}) => {
  return (
    <div className="store-card">
        <p>{name}</p>
        <p>{address}</p>
        <p>Tel. {phone}</p>

    </div>
  );
};

export default StoreCards;
