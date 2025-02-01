import { FlatList, StyleSheet, View } from "react-native";
import { getPokemons } from "../../../actions/pokemons";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { PokeBallBg } from "../../components/ui/PokeBallBg";
import { FAB, Text } from "react-native-paper";
import { globalTheme } from "../../../config/theme/global-theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PokemonCard } from "../../components/pokemons/PokemonCard";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigator/StackNavigator";


interface Props extends StackScreenProps<RootStackParams, "HomeScreen"> {}

export const HomeScreen = ({ navigation }: Props) => {
  const { top } = useSafeAreaInsets();
  const queryClient = useQueryClient();
  const { isDark } = useContext(ThemeContext);

  // !  peticion basica http
  // const { isLoading, data: pokemons } = useQuery({
  //   queryKey: ["pokemons"],
  //   queryFn: () => getPokemons(0),
  //   staleTime: 1000 * 60 * 60,
  // });

  // !peticion con cache y infinitScroll
  const { isLoading, data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["pokemon", "infinity"],
    initialPageParam: 0,

    staleTime: 1000 * 60 * 5,
    queryFn: async (params) => {
      const pokemons = await getPokemons(params.pageParam);
      pokemons.forEach((pokemon) => {
        queryClient.setQueryData(["pokemon", pokemon.id], pokemon);
      });

      return pokemons;
    },
    getNextPageParam: (lastPage, allpages) => allpages.length,
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

      <FAB
        icon="magnify"
        style={[globalTheme.fab]}
        mode="elevated"
        color={isDark ? "white" : "black"}
        onPress={() => navigation.push("SearchScreen")}
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
