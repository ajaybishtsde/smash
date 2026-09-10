import { Link } from 'expo-router';
import { View } from 'react-native';

import { Card } from '@/components/ui/Card';
import { Screen } from '@/components/ui/Screen';
import { Text } from '@/components/ui/Text';

export default function MeetScreen() {
  return (
    <Screen>
      <View className="gap-4">
        <Text variant="title">Meet</Text>
        <Card>
          <Text muted>Meet feature placeholder. Business logic will be added later.</Text>
        </Card>
        <Link href="/settings">
          <Text className="text-primary">Open Settings</Text>
        </Link>
      </View>
    </Screen>
  );
}
