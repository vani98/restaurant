import React from "react";
import ProductCard from "../../../components/ProductCard"
import { useParams } from "react-router-dom";
import { MOCK_DATA } from "../../constants";
import "./MenuList.css"

const MenuList = () => {
  const { category } = useParams();

  const DATA = MOCK_DATA.filter((item) => item.category === category);

  return (
    <div className="menu-cart">      
      <h2>{category}</h2>
      <div className="menu-cart-details-items">
      <p className="menu-cart-details">Descubre las opciones que tenemos para ofrecerte en la categoría: <span>{category}</span></p>
      <div className="menu-cart-items">
        {DATA.length ? (
          <>
            {DATA.map((data) => (
              <ProductCard name={data.name} price={data.price} image={data.image}/>
            ))}
          </>
        ) : (
          <>NO DATA</>
        )}
      </div>
      </div>
    </div>
  );
};

export default MenuList;
