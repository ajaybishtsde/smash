import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/ui/Header";
import { Screen } from "@/components/ui/Screen";
import { Text } from "@/components/ui/Text";
import AppearanceScreen from "@/features/settings/components/AppearanceScreen";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { signOut } from "@/store/authSlice";
import { router } from "expo-router";
import { View } from "react-native";

export default function SettingsScreen() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Screen scrollable>
      <View className="gap-6">
        <View className="gap-2">
          <Header title="Settings" />
          <View className="items-center gap-2">
            <Avatar
              uri="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              size={80}
            />

            {user ? <Text muted>Signed in as {user.phoneNumber}</Text> : null}
          </View>
        </View>

        <AppearanceScreen />

        <Button title="Sign out" variant="secondary" onPress={handleSignOut} />

        <Button title="Close" variant="ghost" onPress={() => router.back()} />
      </View>
    </Screen>
  );
}
