import React from "react";
import "./Home.scss";
import HomeBanner from "../composant/Home-banner.jsx";
import Card from "../composant/Card.jsx";
function Home() {
  return (
    <>
      <HomeBanner />
      <div className="card_container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Home;
