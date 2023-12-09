import React from "react";
import "./Footer.scss";
import LogoBlack from "../Assets/Logo-black.png";
function Footer() {
 
  return (
    <div className="footer">
      <div>
        <img src={LogoBlack} alt="logo" width="100" />
      </div>
      <p> &copy; 2020 Kasa. All rights reserved </p>
    </div>
  );
}

export default Footer;


