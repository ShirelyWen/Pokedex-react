import React from "react";
import { useSelector } from "react-redux";
import * as helperFn from "../../../../utils/helpers";
import DetailDescription from "../../../UI/DetailDescription";
import ProfileCard from "../../../UI/Cards/ProfileCard";

const PokemonTraining = (props) => {
  const pokemonsList = useSelector((state) => state.pokemonsList.pokemonsList);
  const pokemonSpeciesList = useSelector(
    (state) => state.pokemonSpecies.pokemonSpeciesList
  );

  const pokemon = helperFn.findData(pokemonsList, props.id);
  const specie = helperFn.findData(pokemonSpeciesList, props.id);
  const type = helperFn.getFirstType(pokemon);

  let trainingEl;
  if (pokemon && specie) {
    trainingEl = helperFn
      .getTraining(pokemon, specie)
      .map((el, index) => (
        <DetailDescription
          key={index}
          name={el.name}
          value={el.name === "Abilities" ? el.value.join(", ") : el.value}
        />
      ));
  }

  return (
    <ProfileCard title={"Training"} type={type}>
      {trainingEl}
    </ProfileCard>
  );
};

export default PokemonTraining;
