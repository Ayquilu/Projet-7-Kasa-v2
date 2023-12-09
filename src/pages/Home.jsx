import React from "react";
import "./Home.scss";
import HomeBanner from "../composant/Home-banner.jsx";
import Card from "../composant/Card.jsx";
import accommodationData from "../Assets/AccommodationData.js";



function Home() {
  return (
    <>
      <HomeBanner />
      <div className="card_container">
        {accommodationData.map((accommodation) => (
          <Card key={accommodation.id} accommodation={accommodation} />
        ))}
      </div>
    </>
  );
}

export default Home;
