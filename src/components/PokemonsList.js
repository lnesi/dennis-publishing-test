import React from "react";
import PokemonTile from "./PokemonTile.js";

const PokemonsList = ({ list }) => (
  <div className="PokemonsList row">
    {list.map(pokemon => (
      <PokemonTile {...pokemon} key={pokemon.number} />
    ))}
  </div>
);

export default PokemonsList;
