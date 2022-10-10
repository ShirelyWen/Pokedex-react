import React from "react";
import { useSelector } from "react-redux";
import * as helperFn from "../../../../utils/helpers";
import DetailsCard from "../../../UI/Cards/DetailsCard";
import classes from "./PokemonBasic.module.css";

const PokemonBasic = (props) => {
  const pokemonsList = useSelector((state) => state.pokemonsList.pokemonsList);
  const pokemonSpeciesList = useSelector(
    (state) => state.pokemonSpecies.pokemonSpeciesList
  );

  const pokemon = helperFn.findData(pokemonsList, props.id);
  const specie = helperFn.findData(pokemonSpeciesList, props.id);

  let name, image, bio, types;
  if (pokemon && specie) {
    name = helperFn.getName(pokemon);
    image = helperFn.getImage(pokemon);
    bio = helperFn.getBio(specie);
    types = helperFn.getTypes(pokemon).map((type) => {
      return (
        <p
          key={type}
          className={classes.type}
          style={{
            background: `${helperFn.Colors[type]}`,
          }}
        >
          {type}
        </p>
      );
    });
  }

  return (
    <DetailsCard>
      <p className={classes.number}>{`#${helperFn.formatID(props.id)}`}</p>
      <img src={image} alt={name} />
      <div className={classes.bio}>
        <div className={classes.type_container}>{types}</div>
        <p className={classes.content}>{bio}</p>
      </div>
    </DetailsCard>
  );
};

export default PokemonBasic;
