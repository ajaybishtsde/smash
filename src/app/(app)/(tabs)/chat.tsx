import { View } from "react-native";

import { Card } from "@/components/ui/Card";
import { Header } from "@/components/ui/Header";
import { Screen } from "@/components/ui/Screen";
import { Text } from "@/components/ui/Text";

export default function ChatScreen() {
  return (
    <Screen>
      <View className="gap-4">
        <Header title="Chats" />

        <Card>
          <Text muted>Comming Soon...</Text>
        </Card>
      </View>
    </Screen>
  );
}
