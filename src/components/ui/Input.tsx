import { TextInput, View, type TextInputProps } from 'react-native';

import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/cn';

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  containerClassName?: string;
  className?: string;
};

export function Input({
  label,
  error,
  containerClassName,
  className,
  ...props
}: InputProps) {
  return (
    <View className={cn('gap-1.5', containerClassName)}>
      {label ? <Text variant="label">{label}</Text> : null}
      <TextInput
        placeholderTextColor="#71717a"
        className={cn(
          'rounded-xl border border-border bg-surface px-4 py-3 text-base text-foreground',
          error && 'border-error',
          className,
        )}
        {...props}
      />
      {error ? (
        <Text variant="caption" className="text-error">
          {error}
        </Text>
      ) : null}
    </View>
  );
}
