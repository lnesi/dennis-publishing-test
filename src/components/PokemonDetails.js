import React from "react";
import ListGroup from "./ListGroup";
const PokemonDetail = ({
  name,
  number,
  image,
  types,
  resistant,
  weaknesses
}) => (
  <div className="PokemonDetail jumbotron w-100">
    <h1>
      {number}&nbsp;
      <small>{name}</small>
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

export default PokemonDetail;
