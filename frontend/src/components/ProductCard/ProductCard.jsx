import React from "react";
import "./ProductCard.css"

const ProductCard = ({name,price,image}) => {
  return (
   <>
        <div className="product-card">
            <img src={image} alt="Plato"/>
            <div className="product-card-details">
                <p className="product-card-details-name">{name}</p>
                <p className="product-card-details-price">$ {price}</p>
            </div> 
        </div>
    </>
  );
};

export default ProductCard;