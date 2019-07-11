import React from "react";
import ListGroup from "./ListGroup";
const PokemonDetails = ({
  name,
  number,
  image,
  types,
  resistant,
  weaknesses
}) => (
  <div className="PokemonDetails jumbotron w-100">
    <h1>
      <span className="number">{number}</span>&nbsp;
      <small className="name">{name}</small>
    </h1>
    <hr />
    <p>
      <img src={image} alt={name} />
    </p>
    <ListGroup title="Types" items={types} />
    <ListGroup title="Resistant" items={resistant} />
    <ListGroup title="Weakneses" items={weaknesses} />
  </div>
);

export default PokemonDetails;
