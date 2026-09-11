import { Image } from "expo-image";
import { View } from "react-native";

type AvatarProps = {
  uri?: string;
  size?: number;
};

export function Avatar({ uri, size = 48 }: AvatarProps) {
  return (
    <View
      className="items-center justify-center overflow-hidden rounded-full bg-surface"
      style={{
        width: size,
        height: size,
      }}
    >
      {uri ? (
        <Image
          source={uri}
          style={{
            width: size,
            height: size,
          }}
          contentFit="cover"
        />
      ) : null}
    </View>
  );
}
