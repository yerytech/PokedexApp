import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, PokemonScreen, SearchScreen } from "../screen";
export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: { pokemonId: number };
  SearchScreen: undefined;
};

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
