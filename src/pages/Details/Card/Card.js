import React, { useState } from "react";
import DetailsCard from "../DetailsCard";
import "./Card.css";
const Card = ({ person }) => {
  const { name, birth_year, films } = person;

  const [showDetails, setShowDetails] = useState(false);
  const clickDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <div className="card-item">
        <div className="container">
          <div>
            <h4>Name</h4>
            <p>{name}</p>
          </div>
          <div>
            <h4>Films</h4>
            <p>{films.length}</p>
          </div>
          <div>
            <h4>Birth Year</h4>
            <p>{birth_year}</p>
          </div>
          <div>
            <button onClick={clickDetails}>
              {showDetails ? "Hide Details" : "View Details"}
            </button>
          </div>
          {showDetails && <DetailsCard person={person} />}
        </div>
      </div>
    </div>
  );
};

export default Card;
