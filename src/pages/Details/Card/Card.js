import React from "react";
import "./Card.css";
const Card = ({ person }) => {
  const { name, birth_year } = person;
  return (
    <div className="card-item">
      <div className="container">
        <div>
          <h4>Name</h4>
          <p>{name}</p>
        </div>
        <div>
          <h4>Home World</h4>
          <p>Tatooine</p>
        </div>
        <div>
          <h4>Birth Year</h4>
          <p>{birth_year}</p>
        </div>
        <div>
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
