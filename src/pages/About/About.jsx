import React from "react";
import "./About.scss";
import AboutBanner from "../../composant/About-Banner/About-Banner.jsx";
import DropdownPanel from "../../composant/dropdown-panel/dropdown-panel.jsx";

function About() {
  return (
    <>
      <div className="page">
        <AboutBanner />
        <div className="About_Panel">
          <DropdownPanel
            titre="Fiabilité"
            texte="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
          <DropdownPanel
            titre="Respect"
            texte="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <DropdownPanel
            titre="Service"
            texte="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />
          <DropdownPanel
            titre="Sécurité"
            texte="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
    </>
  );
}

export default About;
