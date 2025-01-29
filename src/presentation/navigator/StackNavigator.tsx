import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { HomeScreen, PokemonScreen, SearchScreen } from "../screen";
const Stack = createStackNavigator();
export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={"HomeScreen"}
        component={HomeScreen}
      />
      <Stack.Screen
        name={"PokemonScreen"}
        component={PokemonScreen}
      />
      <Stack.Screen
        name={"SearchScreen"}
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
};
