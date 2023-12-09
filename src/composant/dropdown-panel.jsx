import React, { useState } from "react";
import "./dropdown-panel.scss";
import arrow from "../Assets/Fleche-Dropdown.png";

function DropdownPanel() {

  const [isBottomOpen, setBottomOpen] = useState(false);

  const toggleBottom = () => {
    setBottomOpen(!isBottomOpen);
  };

  return (
    <div className={`dropdown_panel ${isBottomOpen ? "open" : ""}`}>
      <button
        type="button"
        className="dropdown_panel_top"
        onClick={toggleBottom}
      >
        <span>titre</span>
        <img
          className={`arrow ${isBottomOpen ? "up" : "down"}`}
          src={arrow}
          alt="arrow"
        />
      </button>

      <div className="dropdown_panel_bottom">
        <p>texte</p>
      </div>
    </div>
  );
}

export default DropdownPanel;
