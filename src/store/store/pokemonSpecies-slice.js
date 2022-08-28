import { createSlice } from "@reduxjs/toolkit";

const pokemonSpeciesSlice = createSlice({
  name: "pokemonSpecies",

  initialState: {
    pokemonSpeciesList: [],
  },

  reducers: {
    addToSpecies(state, action) {
      state.pokemonSpeciesList = action.payload.pokemonSpeciesList;
    },
  },
});

export const pokemonSpeciesAction = pokemonSpeciesSlice.actions;
export default pokemonSpeciesSlice;
