import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider, DefaultTheme } from "@react-navigation/native";
import theme from './theme';

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    background: theme.colors.background,
    card: theme.colors.surface,
    text: theme.colors.text.primary,
    border: theme.colors.border,
    notification: theme.colors.text.secondary,
  },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <PaperProvider>
      <ThemeProvider value={navigationTheme}>
        <Stack 
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: theme.colors.background,
            },
          }}
        />
      </ThemeProvider>
    </PaperProvider>
  );
}
