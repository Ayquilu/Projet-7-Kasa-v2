import React from 'react';
import { useParams } from 'react-router-dom';
import accommodationData from '../Assets/AccommodationData.js';
import './Accommodation.scss';

function Accommodation() {
  const { id } = useParams();
  const accommodation = accommodationData.find(
    (accommodation) => accommodation.id === id
  );

  const {
    title,
    cover,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = accommodation;

  return (
    <div>
      <img src={cover} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Host: {host.name}</p>
      <p>Rating: {rating}</p>
      <p>Location: {location}</p>
      <ul>
        {equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      <p>Tags: {tags.join(", ")}</p>
    </div>
  );
}


export default Accommodation;