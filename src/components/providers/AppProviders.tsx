import { QueryClientProvider } from '@tanstack/react-query';
import { useColorScheme as useNativeWindColorScheme } from 'nativewind';
import { type PropsWithChildren, useEffect } from 'react';
import { View } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';

import { useResolvedColorScheme } from '@/hooks/useResolvedColorScheme';
import { useAppSelector } from '@/hooks/useAppSelector';
import { queryClient } from '@/lib/queryClient';
import { store } from '@/store';

function ThemeSync({ children }: PropsWithChildren) {
  const themeMode = useAppSelector((state) => state.theme.mode);
  const resolvedScheme = useResolvedColorScheme(themeMode);
  const { setColorScheme } = useNativeWindColorScheme();

  useEffect(() => {
    setColorScheme(resolvedScheme);
  }, [resolvedScheme, setColorScheme]);

  return (
    <View className={`flex-1 bg-background ${resolvedScheme === 'dark' ? 'dark' : ''}`}>
      {children}
    </View>
  );
}

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeSync>{children}</ThemeSync>
      </QueryClientProvider>
    </ReduxProvider>
  );
}
