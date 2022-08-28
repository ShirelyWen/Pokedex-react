import { createSlice } from "@reduxjs/toolkit";

const pokemonsListSlice = createSlice({
  name: "pokemonsList",

  initialState: {
    pokemonsList: [],
    isLoading: true,
  },

  reducers: {
    addPokemon(state, action) {
      state.pokemonsList = action.payload.pokemonsList;
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const pokemonsListAction = pokemonsListSlice.actions;
export default pokemonsListSlice;
