import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="card-item">
      <div className="container">
        <div>
          <h4>Name</h4>
          <p>Luke Skywalker</p>
        </div>
        <div>
          <h4>Home World</h4>
          <p>Tatooine</p>
        </div>
        <div>
          <h4>Birth Year</h4>
          <p>19BBYY</p>
        </div>
        <button>View Details</button>
      </div>
    </div>
  );
};

export default Card;
