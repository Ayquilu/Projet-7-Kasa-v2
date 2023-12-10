import LogoBlack from "../../Assets/Logo-black.png";

import React, { useEffect, useState } from "react";
import "./Footer.scss";
function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <div className="footer">
      <div>
        <img src={LogoBlack} alt="logo" width="100" />
      </div>
      <p> &copy; {currentYear} Kasa. All rights reserved </p>
    </div>
  );
}

export default Footer;
