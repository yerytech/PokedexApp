import { ActivityIndicator, FlatList, View } from "react-native";
import { globalTheme } from "../../../config/theme/global-theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, TextInput } from "react-native-paper";
import { PokemonCard } from "../../components/pokemons/PokemonCard";
import { Pokemon } from "../../../domain/entities/pokemon";
import { useQuery } from "@tanstack/react-query";
import {
  getPokemonsByIds,
  getPokemonsNamesIds,
} from "../../../actions/pokemons";
import { useMemo, useState } from "react";
import { FullScreenLoader } from "../../components/ui/FullScreenLoader";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const [term, setTerm] = useState("");
  const debouncedValue = useDebouncedValue(term);

  const { isLoading, data: pokemonNameList = [] } = useQuery({
    queryKey: ["pokemon,all"],
    queryFn: () => getPokemonsNamesIds(),
  });

  const pokemonNameIdList = useMemo(() => {
    if (!isNaN(Number(debouncedValue))) {
      const pokemon = pokemonNameList.find(
        (pokemon) => pokemon.id === Number(debouncedValue)
      );
      return pokemon ? [pokemon] : [];
    }

    if (debouncedValue.length === 0) return [];

    if (debouncedValue.length < 3) return [];

    return pokemonNameList.filter((pokemon) =>
      pokemon.name.includes(debouncedValue.toLocaleLowerCase())
    );
  }, [debouncedValue]);

  const { isLoading: isLoadingPokemons, data: pokemons = [] } = useQuery({
    queryKey: ["pokemons", "by", pokemonNameIdList],
    queryFn: () =>
      getPokemonsByIds(pokemonNameIdList.map((pokemon) => pokemon.id)),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <View style={[globalTheme.globalMargin, { marginTop: top }]}>
      <TextInput
        placeholder="Buscar Pokemon"
        mode="flat"
        autoFocus
        autoCorrect={false}
        onChangeText={setTerm}
        value={term}
      />
      {isLoadingPokemons && <ActivityIndicator style={{ paddingTop: 20 }} />}

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: top + 20 }}
        data={pokemons}
        keyExtractor={(pokemon, i) => `${pokemon.id}-${i}`}
        numColumns={2}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        ListFooterComponent={<View style={{ height: 130 }} />}
      />
    </View>
  );
};
