import { router } from "expo-router";
import { Pressable, View } from "react-native";

import { Text } from "@/components/ui/Text";

type HeaderProps = {
  title?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  showBack?: boolean;
  onBackPress?: () => void;
};

export function Header({
  title,
  left,
  right,
  showBack = false,
  onBackPress,
}: HeaderProps) {
  const handleBack = () => {
    if (onBackPress) {
      onBackPress();
      return;
    }

    router.back();
  };

  return (
    <View className="h-14 flex-row items-center px-4">
      {/* Left */}
      <View className="w-12 items-start justify-center">
        {showBack ? (
          <Pressable
            onPress={handleBack}
            className="h-10 w-10 items-center justify-center rounded-full"
            hitSlop={8}
          >
            <Text className="text-2xl">‹</Text>
          </Pressable>
        ) : (
          left
        )}
      </View>

      {/* Center */}
      <View className="flex-1 items-center justify-center">
        {title && (
          <Text className="text-lg font-semibold text-foreground">{title}</Text>
        )}
      </View>

      {/* Right */}
      <View className="w-12 items-end justify-center">{right}</View>
    </View>
  );
}
