import React from "react";
import MenuCard from "./MenuCard";
import "./Menu.css"

const CATEGORIES = [
  {
    url: "combos",
    name: "combos",
  },
  {
    url: "entradas",
    name: "entradas",
  },
  {
    url: "platos",
    name: "platos",
  },
  {
    url: "infantil",
    name: "infantil",
  },
  {
    url: "bebidas",
    name: "bebidas",
  },
  {
    url: "postres",
    name: "postres",
  },
];

const Menu = () => {
  return (
    <div className="menucards">
      {CATEGORIES.map((category) => (
        <MenuCard name={category.name} url={category.url}/>
      ))}
    </div>
  );
};

export default Menu;
