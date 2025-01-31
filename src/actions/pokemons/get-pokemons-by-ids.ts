import { Pokemon } from "../../domain/entities/pokemon";
import { getPokemonById } from "./get-pokemonsById";

export const getPokemonsByIds = async (ids: number[]): Promise<Pokemon[]> => {
  try {
    const pokemonPromises: Promise<Pokemon>[] = ids.map((id) => {
      return getPokemonById(id);
    });

    return Promise.all(pokemonPromises);
  } catch (error) {
    throw new Error(`Error gettin pokemons by ids: ${ids}`);
  }
};
