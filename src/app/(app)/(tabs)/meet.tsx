import { Link } from "expo-router";
import { View } from "react-native";

import { Card } from "@/components/ui/Card";
import { Header } from "@/components/ui/Header";
import { Screen } from "@/components/ui/Screen";
import { Text } from "@/components/ui/Text";

export default function MeetScreen() {
  return (
    <Screen>
      <View className="gap-4">
        <Header title="Meet" />

        <Card>
          <Text muted>Comming Soon...</Text>
        </Card>
        <Link href="/settings">
          <Text className="text-primary">Open Settings</Text>
        </Link>
      </View>
    </Screen>
  );
}
