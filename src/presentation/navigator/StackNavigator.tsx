import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { HomeScreen, PokemonScreen, SearchScreen } from "../screen";
const Stack = createStackNavigator();
export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"HomeScreen"}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"PokemonScreen"}
        component={PokemonScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"SearchScreen"}
        component={SearchScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
