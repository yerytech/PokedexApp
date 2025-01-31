import { pokeApi } from "../../config/api/pokeApi";
import { PokeAPIPaginatedResponse } from "../../infrastructure/interfaces/pokeApi.interfaces";

export const getPokemonsNamesIds = async () => {
  const url = `pokemon?limit=1000`;
  const { data } = await pokeApi.get<PokeAPIPaginatedResponse>(url);

  return data.results.map((info) => ({
    id: Number(info.url.split("/")[6]),
    name: info.name,
  }));
};
