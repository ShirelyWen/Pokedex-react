import React from "react";
import { useSelector } from "react-redux";
import * as helperFn from "../../../../utils/helpers";
import DetailDescription from "../../../UI/DetailDescription";
import ProfileCard from "../../../UI/Cards/ProfileCard";

const PokemonSpecies = (props) => {
  const pokemonsList = useSelector((state) => state.pokemonsList.pokemonsList);
  const pokemonSpeciesList = useSelector(
    (state) => state.pokemonSpecies.pokemonSpeciesList
  );

  const pokemon = helperFn.findData(pokemonsList, props.id);
  const specie = helperFn.findData(pokemonSpeciesList, props.id);

  const type = pokemon ? pokemon.types[0].type.name : null;
  let speciesEl;
  if (pokemon && specie) {
    speciesEl = helperFn
      .getSpecies(pokemon, specie)
      .map((el, index) => (
        <DetailDescription key={index} name={el.name} value={el.value} />
      ));
  }

  return (
    <ProfileCard title={"Species"} type={type}>
      {speciesEl}
    </ProfileCard>
  );
};

export default PokemonSpecies;
