import { useColorScheme } from "react-native";

import { colors } from "@/constants/theme";

export function useTheme() {
  const colorScheme = useColorScheme();

  const mode = colorScheme === "dark" ? "dark" : "light";

  return {
    mode,
    colors: colors[mode],
  };
}
