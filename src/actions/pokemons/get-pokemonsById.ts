import { pokeApi } from "../../config/api/pokeApi";
import { Pokemon } from "../../domain/entities/pokemon";
import { PokeAPIPokemons } from "../../infrastructure/interfaces/pokeApi.interfaces";
import { PokemonMapper } from "../../infrastructure/mappers/pokemon.mapper";

export const getPokemonById = async (id: number): Promise<Pokemon> => {
  try {
    const { data } = await pokeApi.get<PokeAPIPokemons>(`/pokemon/${id}`);
    const pokemon = await PokemonMapper.pokeApiPokemonToEntity(data);

    return pokemon;
  } catch (error) {
    throw new Error(`ERROR AL OBTENER EL POKEMON CON EL ID ${id}`);
  }
};
