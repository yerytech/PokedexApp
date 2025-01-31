import { ActivityIndicator, FlatList, View } from "react-native";
import { globalTheme } from "../../../config/theme/global-theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { PokemonCard } from "../../components/pokemons/PokemonCard";
import { Pokemon } from "../../../domain/entities/pokemon";
export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[globalTheme.globalMargin, { marginTop: top }]}>
      <TextInput
        placeholder="Buscar Pokemon"
        mode="flat"
        autoFocus
        autoCorrect={false}
        onChangeText={(value) => console.log(value)}
        value="hola"
      />
      <ActivityIndicator style={{ paddingTop: 20 }} />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: top + 20 }}
        data={[] as Pokemon[]}
        keyExtractor={(pokemon, i) => `${pokemon.id}-${i}`}
        numColumns={2}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
};
