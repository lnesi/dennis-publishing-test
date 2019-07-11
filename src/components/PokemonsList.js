import React from "react";
import PokemonTile from "./PokemonTile.js";

const PokemonsList = ({ data }) => (
  <div className="PokemonsList row">
    {data.pokemons.map(pokemon => (
      <PokemonTile {...pokemon} key={pokemon.number} />
    ))}
  </div>
);

export default PokemonsList;
