import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./presentation/navigator/StackNavigator";
import { ThemeContextProvider } from "./presentation/context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
export default function PokedexApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <StackNavigator />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}
