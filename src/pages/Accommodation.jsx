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
    host,
    rating,
    location,
    equipments,
    tags,
  } = accommodation;

  return (
    <div className="accommodation">
      <Carousel images={pictures} />
      <h1>{title}</h1>
      <p>Host: {host.name}</p>
      <p>Rating: {rating}</p>
      <p>Location: {location}</p>
      <p>Tags: {tags.join(", ")}</p>
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
