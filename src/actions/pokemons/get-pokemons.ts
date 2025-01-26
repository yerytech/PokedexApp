import { pokeApi } from "../../config/api/pokeApi";
import type { Pokemon } from "../../domain/entities/pokemon";
import type {
  PokeAPIPaginatedResponse,
  PokeAPIPokemons,
} from "../../infrastructure/interfaces/pokeApi.interfaces";

export const getPokemons = async (
  page: number,
  limit: number = 20
): Promise<Pokemon[]> => {
  try {
    const url = `/pokemon?offset=${page * 10}&limit=${limit}`;
    const { data } = await pokeApi.get<PokeAPIPaginatedResponse>(url);

    const pokemonPromises = data.results.map((info) => {
      return pokeApi.get<PokeAPIPokemons>(info.url);
    });
    const pokeAPIPokemons = await Promise.all(pokemonPromises);
    // console.log(pokeAPIPokemons);

    return [];
  } catch (error) {
    throw new Error(`Error getting pokemons: ${error}`);
  }
};
