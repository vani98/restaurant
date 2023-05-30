import React from "react";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Link to="/">
          <img
            src="/images/Logo.svg"
            alt="Logo de The Golden Grill"
          />
        </Link>
        <Nav/>
      </div>
    </header>
  );
};

export default Header;