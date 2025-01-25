import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getPokemons } from "../../../actions/pokemons";
export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: top }}>
      <Text>HomeScreen</Text>
      <Button mode="contained">press me</Button>
    </View>
  );
};
