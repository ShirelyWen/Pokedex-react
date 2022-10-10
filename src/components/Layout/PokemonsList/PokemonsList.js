import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import * as helperFn from "../../../utils/helpers";
import Loader from "../../UI/Loader";
import PokemonCard from "../../UI/Cards/PokemonCard";
import Button from "../../UI/Button";
import classes from "./PokemonsList.module.css";
import { fetchPokemonData } from "../../../store/actions/pokemon-actions";

const PokemonsList = () => {
  const navigate = useNavigate();
  const { previous, next, pokemonsList, isLoading } = useSelector(
    (state) => state.pokemonsList
  );
  const dispatch = useDispatch();

  const prevBatchHandler = () => {
    if (!previous) return;
    dispatch(fetchPokemonData(previous));
  };
  const nextBatchHandler = () => {
    if (!next) return;
    dispatch(fetchPokemonData(next));
  };

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
        <img src={helperFn.getImage(pokemon)} alt={pokemon.name} />
        <span>{helperFn.getName(pokemon)}</span>
      </PokemonCard>
    );
  });
  const button = (
    <div className={classes.buttonContainer}>
      <Button onClick={prevBatchHandler} disabled={previous ? false : true}>
        prev
      </Button>
      <Button onClick={nextBatchHandler} disabled={next ? false : true}>
        next
      </Button>
    </div>
  );

  return (
    <div className={classes.container}>
      {isLoading && <Loader />}
      {!isLoading && pokemonCards}
      {!isLoading && button}
    </div>
  );
};

export default PokemonsList;
