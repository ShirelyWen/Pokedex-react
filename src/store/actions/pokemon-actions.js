import { pokemonsListAction } from "../store/pokemonsList-slice";
import { pokemonSpeciesAction } from "../store/pokemonSpecies-slice";
import { initialURL } from "../../utils/request_urls";

export const fetchPokemonData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(initialURL);
      const data = await response.json();

      return data;
    };

    const { results } = await fetchData();
    const pokemonsList = await Promise.all(
      results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = response.json();
        return data;
      })
    );

    const pokemonSpeciesList = await Promise.all(
      pokemonsList.map(async (pokemon) => {
        const response = await fetch(pokemon.species.url);
        const data = response.json();
        return data;
      })
    );

    const isLoading = false;

    dispatch(pokemonsListAction.addPokemon({ pokemonsList, isLoading }));
    dispatch(
      pokemonSpeciesAction.addToSpecies({
        pokemonSpeciesList,
      })
    );
  };
};
