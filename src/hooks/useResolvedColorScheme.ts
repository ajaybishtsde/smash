import { useColorScheme as useSystemColorScheme } from 'react-native';

import type { ThemeMode } from '@/constants/theme';

export function useResolvedColorScheme(mode: ThemeMode): 'light' | 'dark' {
  const systemScheme = useSystemColorScheme();

  if (mode === 'system') {
    return systemScheme === 'dark' ? 'dark' : 'light';
  }

  return mode;
}
