// import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { View } from "react-native";
import "react-native-reanimated";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  return (
    // <ThemeProvider>
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="cover"
          options={{ title: "Cover", headerShown: false }}
        />
      </Stack>
    </View>

    // </ThemeProvider>
  );
}
