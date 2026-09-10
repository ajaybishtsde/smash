import {
  ActivityIndicator,
  Pressable,
  type PressableProps,
} from 'react-native';

import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = PressableProps & {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary',
  secondary: 'bg-surface border border-border',
  ghost: 'bg-transparent',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-2',
  md: 'px-4 py-3',
  lg: 'px-5 py-4',
};

export function Button({
  title,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  className,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      disabled={isDisabled}
      className={cn(
        'items-center justify-center rounded-xl',
        variantClasses[variant],
        sizeClasses[size],
        isDisabled && 'opacity-50',
        className,
      )}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? '#ffffff' : undefined} />
      ) : (
        <Text
          className={cn(
            'font-semibold',
            variant === 'primary' ? 'text-white' : 'text-foreground',
          )}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}
