import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}>
      <Text>HomeScreen</Text>
      <Button mode="contained">press me</Button>
    </View>
  );
};
