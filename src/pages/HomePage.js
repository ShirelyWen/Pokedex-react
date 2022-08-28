import React, { Fragment } from "react";
import HomePageHeader from "../components/Layout/Header/HomePageHeader";
import PokemonsList from "../components/Layout/PokemonsList/PokemonsList";

function HomePage() {
  return (
    <Fragment>
      <HomePageHeader />
      <PokemonsList />
    </Fragment>
  );
}

export default HomePage;
