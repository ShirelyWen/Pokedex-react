import { createSlice } from "@reduxjs/toolkit";

const pokemonsListSlice = createSlice({
  name: "pokemonsList",

  initialState: {
    previous: "",
    next: "",
    pokemonsList: [],
    isLoading: true,
  },

  reducers: {
    addPokemon(state, action) {
      state.previous = action.payload.previous;
      state.next = action.payload.next;
      state.pokemonsList = action.payload.pokemonsList;
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const pokemonsListAction = pokemonsListSlice.actions;
export default pokemonsListSlice;
