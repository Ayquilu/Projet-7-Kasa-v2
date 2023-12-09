import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </NavLink>
      <div className="nav-links">
        <ul>
          <li>
            <NavLink to="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              A propos
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
