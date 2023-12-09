import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <div className="logo">
          <img src="../Assets/Logo.png" alt="logo" />
        </div>
      </NavLink>
      <div className="nav-links">
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              À propos
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
