import { Pressable, View } from "react-native";

import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";
import { themeModes, type ThemeMode } from "@/constants/theme";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { setThemeMode } from "@/store/themeSlice";

export default function AppearanceScreen() {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.theme.mode);

  return (
    <Card className="gap-3">
      <Text variant="subtitle">Appearance</Text>
      <View className="flex-row gap-2">
        {themeModes.map((mode) => (
          <ThemeModeButton
            key={mode}
            mode={mode}
            selected={themeMode === mode}
            onPress={() => dispatch(setThemeMode(mode))}
          />
        ))}
      </View>
    </Card>
  );
}

type ThemeModeButtonProps = {
  mode: ThemeMode;
  selected: boolean;
  onPress: () => void;
};

function ThemeModeButton({ mode, selected, onPress }: ThemeModeButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`rounded-lg border px-3 py-2 ${selected ? "border-primary bg-primary/10" : "border-border"}`}
    >
      <Text className={selected ? "text-primary" : undefined}>
        {capitalize(mode)}
      </Text>
    </Pressable>
  );
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
