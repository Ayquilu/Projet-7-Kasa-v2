import React from "react";
import {Link} from "react-router-dom";
import "./Card.scss";

function Card ({accommodation}) {
    const {id, cover, title} = accommodation;
    return (
        <Link to={`/accommodation/${id}`} className="card">
            <img src={cover} alt={title} />
            <h2>{title}</h2>
        </Link>
    );
    
}

export default Card;