import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"
const Nav = (props) => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink to="/" className={({isActive})=> isActive?"activo":undefined}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/Menu" className={({isActive})=> isActive?"activo":undefined}>Menu</NavLink>
          </li>
          <li>
            <NavLink to="/Nosotros" className={({isActive})=> isActive?"activo":undefined}>Nosotros</NavLink>
          </li>
          <li>
            <NavLink to="/Contacto" className={({isActive})=> isActive?"activo":undefined}>Contacto</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;