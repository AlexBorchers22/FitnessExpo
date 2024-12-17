import { PaperProvider } from "react-native-paper";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "@react-navigation/native";
import { darkTheme, lightTheme } from "@/constants/theme";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <PaperProvider theme={colorScheme === "dark" ? darkTheme : lightTheme}>
      <ThemeProvider value={colorScheme === "dark" ? darkTheme : lightTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(app)" options={{ headerShown: false }} />
          <Stack.Screen name="index" redirect={true} />
        </Stack>
      </ThemeProvider>
    </PaperProvider>
  );
}
