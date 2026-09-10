import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#208AEF',
        tabBarStyle: {
          borderTopWidth: 1,
        },
      }}
    >
      <Tabs.Screen name="meet" options={{ title: 'Meet' }} />
      <Tabs.Screen name="events" options={{ title: 'Events' }} />
      <Tabs.Screen name="chat" options={{ title: 'Chat' }} />
    </Tabs>
  );
}
