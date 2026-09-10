import { Text as RNText, type TextProps as RNTextProps } from 'react-native';

import { cn } from '@/lib/cn';

type TextVariant = 'body' | 'title' | 'subtitle' | 'caption' | 'label';

type TextProps = RNTextProps & {
  variant?: TextVariant;
  muted?: boolean;
  className?: string;
};

const variantClasses: Record<TextVariant, string> = {
  body: 'text-base',
  title: 'text-2xl font-bold',
  subtitle: 'text-lg font-semibold',
  caption: 'text-sm',
  label: 'text-sm font-medium',
};

export function Text({
  variant = 'body',
  muted = false,
  className,
  ...props
}: TextProps) {
  return (
    <RNText
      className={cn(
        variantClasses[variant],
        muted ? 'text-muted' : 'text-foreground',
        className,
      )}
      {...props}
    />
  );
}
