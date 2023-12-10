import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss";
export function Error() {
  return (
    <div className="error">
      <h1>404</h1>
      <h2>Oops! La page que vous demandez n'existe pas</h2>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error;