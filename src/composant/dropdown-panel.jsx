import React from "react";
import "./dropdown-panel.scss";
import arrow from "../Assets/Fleche-Dropdown.png";

function DropdownPanel() {
  return (
    <div className="dropdown_panel">
      <button className="dropdown_panel_top">
        <span>titre</span>
        <img src={arrow} alt="arrow" />
      </button>

      <div className="dropdown_panel_bottom">
        <p>texte</p>
      </div>
    </div>
  );
}
export default DropdownPanel;
