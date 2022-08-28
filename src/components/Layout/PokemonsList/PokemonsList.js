import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import * as helperFn from "../../../utils/helpers";
import Loader from "../../UI/Loader";
import PokemonCard from "../../UI/Cards/PokemonCard";
import classes from "./PokemonsList.module.css";

const PokemonsList = () => {
  const navigate = useNavigate();
  const { pokemonsList, isLoading } = useSelector(
    (state) => state.pokemonsList
  );

  const showDetailsHandler = (id) => {
    navigate(`/details/${id}`);
  };

  const pokemonCards = pokemonsList.map((pokemon) => {
    return (
      <PokemonCard
        key={pokemon.id}
        types={helperFn.getTypes(pokemon)}
        onClick={showDetailsHandler.bind(null, pokemon.id)}
      >
        <img src={helperFn.getImage(pokemon)} />
        <span>{helperFn.getName(pokemon)}</span>
      </PokemonCard>
    );
  });
  return (
    <div className={classes.container}>
      {isLoading && <Loader />}
      {!isLoading && pokemonCards}
    </div>
  );
};

export default PokemonsList;
