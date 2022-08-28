import React from "react";
import { useSelector } from "react-redux";
import * as helperFn from "../../../../utils/helpers";
import DetailDescription from "../../../UI/DetailDescription";
import ProfileCard from "../../../UI/Cards/ProfileCard";
import classes from "./PokemonStat.module.css";

const PokemonStats = (props) => {
  const pokemonsList = useSelector((state) => state.pokemonsList.pokemonsList);

  const pokemon = helperFn.findData(pokemonsList, props.id);

  const type = helperFn.getFirstType(pokemon);

  let statEl;
  if (pokemon) {
    statEl = helperFn.getStats(pokemon).map((el, index) => {
      return (
        <DetailDescription
          className={classes.stat}
          key={index}
          name={el.name}
          value={el.value}
        />
      );
    });
  }

  return (
    <ProfileCard title={"Stats"} type={type}>
      {statEl}
    </ProfileCard>
  );
};

export default PokemonStats;
