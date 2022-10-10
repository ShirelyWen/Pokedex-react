import { pokemonsListAction } from "../store/pokemonsList-slice";
import { pokemonSpeciesAction } from "../store/pokemonSpecies-slice";
import { initialURL } from "../../utils/request_urls";

export const fetchPokemonData = (url) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const fetchURL = url ? url : initialURL;
      const response = await fetch(fetchURL);
      const data = await response.json();

      return data;
    };

    const { previous, next, results } = await fetchData();
    const pokemonsList = await Promise.all(
      results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = response.json();
        return data;
      })
    );

    const isLoading = false;

    const pokemonSpeciesList = await Promise.all(
      pokemonsList.map(async (pokemon) => {
        const response = await fetch(pokemon.species.url);
        const data = response.json();
        return data;
      })
    );

    dispatch(
      pokemonsListAction.addPokemon({ previous, next, pokemonsList, isLoading })
    );
    dispatch(
      pokemonSpeciesAction.addToSpecies({
        pokemonSpeciesList,
      })
    );
  };
};
