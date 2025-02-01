import { pokeApi } from "../../config/api/pokeApi";
import type { Pokemon } from "../../domain/entities/pokemon";
import type {
  PokeAPIPaginatedResponse,
  PokeAPIPokemons,
} from "../../infrastructure/interfaces/pokeApi.interfaces";
import { PokemonMapper } from "../../infrastructure/mappers/pokemon.mapper";

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

    const poksPromises = pokeAPIPokemons.map((item) =>
      PokemonMapper.pokeApiPokemonToEntity(item.data)
    );

    return await Promise.all(poksPromises);
  } catch (error) {
    console.log(error);
    throw new Error(`Error getting pokemons: ${error}`);
  }
};
