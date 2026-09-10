import { View } from 'react-native';

import { Card } from '@/components/ui/Card';
import { Screen } from '@/components/ui/Screen';
import { Text } from '@/components/ui/Text';

export default function ChatScreen() {
  return (
    <Screen>
      <View className="gap-4">
        <Text variant="title">Chat</Text>
        <Card>
          <Text muted>Chat feature placeholder. Business logic will be added later.</Text>
        </Card>
      </View>
    </Screen>
  );
}
