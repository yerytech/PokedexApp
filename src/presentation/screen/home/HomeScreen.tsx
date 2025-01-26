import { ActivityIndicator, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getPokemons } from "../../../actions/pokemons";
import { useQuery } from "@tanstack/react-query";
export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, data } = useQuery({
    queryKey: ["pokemons"],
    queryFn: () => getPokemons(5),
    staleTime: 1000 * 60 * 60,
  });

  return (
    <View style={{ paddingTop: top }}>
      <Text>HomeScreen</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Button mode="contained">press me</Button>
      )}
    </View>
  );
};
