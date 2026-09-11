import { router } from "expo-router";
import { Pressable, View } from "react-native";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Header } from "@/components/ui/Header";
import { Screen } from "@/components/ui/Screen";
import { Text } from "@/components/ui/Text";
import { themeModes, type ThemeMode } from "@/constants/theme";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { signOut } from "@/store/authSlice";
import { setThemeMode } from "@/store/themeSlice";

export default function SettingsScreen() {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.theme.mode);
  const user = useAppSelector((state) => state.auth.user);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Screen scrollable>
      <View className="gap-6">
        <View className="gap-2">
          <Header title="Settings" />

          {user ? <Text muted>Signed in as {user.email}</Text> : null}
        </View>

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

        <Button title="Sign out" variant="secondary" onPress={handleSignOut} />

        <Button title="Close" variant="ghost" onPress={() => router.back()} />
      </View>
    </Screen>
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
