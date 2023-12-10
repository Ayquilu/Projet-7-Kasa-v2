import React from "react";
import { useParams } from "react-router-dom";
import accommodationData from "../Assets/AccommodationData.js";
import DropdownPanel from "../composant/dropdown-panel.jsx";
import "./Accommodation.scss";
import Carousel from "../composant/Carousel.jsx";

function Accommodation() {
  const { id } = useParams();
  const accommodation = accommodationData.find(
    (accommodation) => accommodation.id === id
  );

  const {
    title,
    pictures,
    description,
    host: { name, picture },
    rating,
    location,
    equipments,
    tags,
  } = accommodation;

  return (
    <div className="accommodation">
      <Carousel images={pictures} />
      <div className="Info_part">
        <div className="left_side">
          <h1>{title}</h1>
          <p>Location: {location}</p>
          <div className="tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="right_side">
          <div className="host">
            <span>{name}</span>
            <div className="picture">
              <img src={picture} alt={name} />
            </div>
          </div>
          <p>Rating: {rating}</p>
        </div>
      </div>
      <div className="Accommodation_Panel">
        <DropdownPanel titre="Description" texte={description} />
        <DropdownPanel
          titre="Equipements"
          texte=<ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        />
      </div>
    </div>
  );
}

export default Accommodation;
