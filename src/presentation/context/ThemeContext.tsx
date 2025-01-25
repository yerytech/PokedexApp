import { createContext, PropsWithChildren } from "react";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { StatusBar, useColorScheme } from "react-native";
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
} from "react-native-paper";

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

export const ThemeContext = createContext({
  isDark: false,
  theme: LightTheme,
});

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const theme = isDark
    ? { ...DarkTheme, fonts: { ...NavigationDarkTheme.fonts } }
    : { ...LightTheme, fonts: { ...NavigationDefaultTheme.fonts } };

  return (
    <PaperProvider theme={isDark ? MD3DarkTheme : MD3LightTheme}>
      <NavigationContainer theme={theme}>
        <StatusBar
          backgroundColor={isDark ? "#000" : "#fff"}
          barStyle={isDark ? "light-content" : "dark-content"}
        />
        <ThemeContext.Provider value={{ isDark, theme }}>
          {children}
        </ThemeContext.Provider>
      </NavigationContainer>
    </PaperProvider>
  );
};
