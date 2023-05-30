import React from "react";
import {Link} from "react-router-dom"
import "./MenuCard.css"

const MenuCard = ({name,url}) => {
  return (
        <Link to={url} className="menu-card">
                <p>{name}</p>
        </Link>
  );
};

export default MenuCard;
