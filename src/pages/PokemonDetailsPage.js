import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import Container from "../components/UI/Container";
import DetailsPageHeader from "../components/Layout/PokemonDetails/DetailsPageHeader/DetailsPageHeader";
import PokemonNameTitle from "../components/Layout/PokemonDetails/PokemonNameTitle/PokemonNameTitle";
import PokemonBasic from "../components/Layout/PokemonDetails/PokemonBasic/PokemonBasic";
import PokemonStats from "../components/Layout/PokemonDetails/PokemonStats/PokemonStats";
import PokemonTraining from "../components/Layout/PokemonDetails/PokemonTraining/PokemonTraining";
import PokemonSpecies from "../components/Layout/PokemonDetails/PokemonSpecies/PokemonSpecies";

function PokemonDetailsPage() {
  const routeParams = useParams();
  const id = +routeParams.id;

  return (
    <Fragment>
      <DetailsPageHeader id={id} />
      <Container>
        <PokemonNameTitle id={id} />
        <PokemonBasic id={id} />
        <PokemonStats id={id} />
        <PokemonTraining id={id} />
        <PokemonSpecies id={id} />
      </Container>
    </Fragment>
  );
}

export default PokemonDetailsPage;
