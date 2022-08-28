import React from "react";
import { useSelector } from "react-redux";
import { Colors, findData } from "../../../../utils/helpers";
import classes from "./PokemonNameTitle.module.css";

function PokemonNameTitle(props) {
  const pokemonsList = useSelector((state) => state.pokemonsList.pokemonsList);

  const pokemon = findData(pokemonsList, props.id);

  const title = pokemon ? pokemon.name : null;
  const type = pokemon ? pokemon.types[0].type.name : null;

  return (
    <div
      className={classes.pokemonName}
      style={{ backgroundColor: `${Colors[type]}` }}
    >
      <p>{title}</p>
    </div>
  );
}

export default PokemonNameTitle;
