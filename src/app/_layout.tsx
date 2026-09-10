import '@/global.css';
import 'react-native-reanimated';

import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import { AppProviders } from '@/components/providers/AppProviders';
import { useAppSelector } from '@/hooks/useAppSelector';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <AppProviders>
      <StatusBar style="auto" />
      <RootNavigator />
    </AppProviders>
  );
}

function RootNavigator() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const hasCompletedOnboarding = useAppSelector((state) => state.auth.hasCompletedOnboarding);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!isAuthenticated}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>

      <Stack.Protected guard={isAuthenticated && !hasCompletedOnboarding}>
        <Stack.Screen name="(onboarding)" />
      </Stack.Protected>

      <Stack.Protected guard={isAuthenticated && hasCompletedOnboarding}>
        <Stack.Screen name="(app)" />
      </Stack.Protected>
    </Stack>
  );
}
