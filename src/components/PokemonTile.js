import React from "react";
import { withRouter } from "react-router-dom";

export const PokemonTile = ({ image, name, number, history }) => (
  <div
    className="PokemonTile col-sm-12 col-md-6 col-lg-4 col-xl-2"
    onClick={() => {
      history.push("/details/" + name);
    }}
  >
    <div className="card">
      <div className="row no-gutters">
        <div className="col-sm-4">
          <img src={image} className="card-img-top" alt={name} />
        </div>
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title number">{number}</h5>
            <p className="card-text name">{name}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(PokemonTile);
