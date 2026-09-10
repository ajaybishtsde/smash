import { View } from 'react-native';

import { Card } from '@/components/ui/Card';
import { Screen } from '@/components/ui/Screen';
import { Text } from '@/components/ui/Text';

export default function EventsScreen() {
  return (
    <Screen>
      <View className="gap-4">
        <Text variant="title">Events</Text>
        <Card>
          <Text muted>Events feature placeholder. Business logic will be added later.</Text>
        </Card>
      </View>
    </Screen>
  );
}
