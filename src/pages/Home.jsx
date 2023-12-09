import React from "react";
import "./Home.scss";
import HomeBanner from "../composant/Home-banner.jsx";
import CardContainer from "../composant/Card-Container.jsx";

function Home() {
  return (
    <>
      <HomeBanner />
      <CardContainer />
    </>
  );
}

export default Home;
