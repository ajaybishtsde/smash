import { View } from 'react-native';

import { Button } from '@/components/ui/Button';
import { Screen } from '@/components/ui/Screen';
import { Text } from '@/components/ui/Text';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { completeOnboarding } from '@/store/authSlice';

export default function OnboardingScreen() {
  const dispatch = useAppDispatch();

  return (
    <Screen contentClassName="justify-center gap-6">
      <View className="gap-2">
        <Text variant="title">Welcome aboard</Text>
        <Text muted>
          Optional onboarding will live here. For now, continue to the main app.
        </Text>
      </View>

      <Button title="Continue to app" onPress={() => dispatch(completeOnboarding())} />
    </Screen>
  );
}
