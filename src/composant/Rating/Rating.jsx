import React from "react";
import "./Rating.scss";
import Etoile from "../../Assets/Etoile.png";
import EtoileActive from "../../Assets/Etoile-active.png";
import PropTypes from "prop-types";

function Rating({ rateValue }) {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {range.map((rangeElement) => (
        <span key={rangeElement.toString()}>
          <img
            src={rangeElement <= rateValue ? EtoileActive : Etoile}
            alt={`Étoile ${rangeElement}`}
          />
        </span>
      ))}
    </div>
  );
}

Rating.propTypes = {
  rateValue: PropTypes.number.isRequired,
};

export default Rating;