import React, { useState } from "react";
import "./Carousel.scss";
import FlecheGauche from "../Assets/Fleche-carrousel-gauche.png";
import FlecheDroite from "../Assets/Fleche-carrousel-droite.png";

function Carousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <button type="button" className="arrow_left" onClick={goToPrevImage}>
        <img src={FlecheGauche} alt="FlecheGauche" />
      </button>
      <img src={images[currentImage]} alt="" />
      <button type="button" className="arrow_right" onClick={goToNextImage}>
        <img src={FlecheDroite} alt="FlecheDroite" />
      </button>
      <div className="counter">{`${currentImage + 1}/${images.length}`}</div>
    </div>
  );
}

export default Carousel;
