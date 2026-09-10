import { ActivityIndicator, View } from 'react-native';

import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/cn';

type LoaderProps = {
  message?: string;
  className?: string;
};

export function Loader({ message, className }: LoaderProps) {
  return (
    <View className={cn('flex-1 items-center justify-center gap-3 bg-background', className)}>
      <ActivityIndicator size="large" />
      {message ? <Text muted>{message}</Text> : null}
    </View>
  );
}
