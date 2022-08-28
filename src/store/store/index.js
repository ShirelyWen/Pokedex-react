import { configureStore } from "@reduxjs/toolkit";

import pokemonsListSlice from "./pokemonsList-slice";
import pokemonSpeciesSlice from "./pokemonSpecies-slice";

const store = configureStore({
  reducer: {
    pokemonSpecies: pokemonSpeciesSlice.reducer,
    pokemonsList: pokemonsListSlice.reducer,
  },
});

export default store;
