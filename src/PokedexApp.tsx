import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./presentation/navigator/StackNavigator";
import { PaperProvider } from "react-native-paper";

export default function PokedexApp() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
