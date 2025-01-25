import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./presentation/navigator/StackNavigator";
import { PaperProvider } from "react-native-paper";
import { ThemeContextProvider } from "./presentation/context/ThemeContext";

export default function PokedexApp() {
  return (
    <ThemeContextProvider>
      <StackNavigator />
    </ThemeContextProvider>
  );
}
