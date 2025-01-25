import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./presentation/navigator/StackNavigator";

export default function PokedexApp() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
