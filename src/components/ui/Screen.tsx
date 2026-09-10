import { type PropsWithChildren } from 'react';
import { ScrollView, View, type ScrollViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { cn } from '@/lib/cn';

type ScreenProps = PropsWithChildren<{
  scrollable?: boolean;
  className?: string;
  contentClassName?: string;
  scrollViewProps?: Omit<ScrollViewProps, 'children' | 'className' | 'contentContainerClassName'>;
}>;

export function Screen({
  children,
  scrollable = false,
  className,
  contentClassName,
  scrollViewProps,
}: ScreenProps) {
  if (scrollable) {
    return (
      <SafeAreaView className={cn('flex-1 bg-background', className)}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerClassName={cn('flex-grow px-5 py-6', contentClassName)}
          {...scrollViewProps}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className={cn('flex-1 bg-background', className)}>
      <View className={cn('flex-1 px-5 py-6', contentClassName)}>{children}</View>
    </SafeAreaView>
  );
}
