import { FlatList, StyleSheet, View } from "react-native";

import { getPokemons } from "../../../actions/pokemons";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { PokeBallBg } from "../../components/ui/PokeBallBg";
import { Text } from "react-native-paper";
import { globalTheme } from "../../../config/theme/global-theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PokemonCard } from "../../components/pokemons/PokemonCard";
export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  // !  peticion basica http
  // const { isLoading, data: pokemons } = useQuery({
  //   queryKey: ["pokemons"],
  //   queryFn: () => getPokemons(0),
  //   staleTime: 1000 * 60 * 60,
  // });

  // !peticion con cache y infinitScroll
  const { isLoading, data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["pokemons", "infinite"],
    initialPageParam: 0,
    queryFn: (params) => getPokemons(params.pageParam),
    getNextPageParam: (lastPage, allpages) => allpages.length,
    staleTime: 1000 * 60 * 60,
  });

  return (
    <View style={globalTheme.globalMargin}>
      <PokeBallBg style={styles.imgposition} />

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: top + 20 }}
        data={data?.pages.flat() ?? []}
        keyExtractor={(pokemon, i) => `${pokemon.id}-${i}`}
        numColumns={2}
        ListHeaderComponent={() => <Text variant="displayMedium">Pokedex</Text>}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        onEndReachedThreshold={0.4}
        onEndReached={() => fetchNextPage()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgposition: {
    position: "absolute",

    top: -100,
    right: -100,
  },
});
