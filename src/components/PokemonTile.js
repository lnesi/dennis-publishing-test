import React from "react";
import { Link } from "react-router-dom";

const PokemonTile = ({ image, name, number }) => (
  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-2">
    <div className="card">
      <div className="row no-gutters">
        <div className="col-sm-4">
          <img src={image} className="card-img-top" alt={name} />
        </div>
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">{number}</h5>
            <p className="card-text">{name}</p>
            <Link to={`/detail/${number}`} className="btn btn-primary">
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PokemonTile;
