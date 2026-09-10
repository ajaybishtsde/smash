import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="settings"
        options={{
          presentation: 'modal',
          headerShown: true,
          title: 'Settings',
        }}
      />
    </Stack>
  );
}
