import { Image, View } from "react-native";

import { Text } from "@/components/ui/Text";

type UserProfileProps = {
  name: string;
  age?: number;
  location?: string;
  bio?: string;
  image?: string;
};

export function UserProfile({
  name,
  age,
  location,
  bio,
  image,
}: UserProfileProps) {
  return (
    <View className="items-center gap-4">
      {image ? (
        <Image source={{ uri: image }} className="h-28 w-28 rounded-full" />
      ) : (
        <View className="h-28 w-28 items-center justify-center rounded-full bg-surface">
          <Text className="text-3xl text-muted">
            {name.charAt(0).toUpperCase()}
          </Text>
        </View>
      )}

      <View className="items-center gap-1">
        <Text className="text-xl font-semibold">
          {name}
          {age ? `, ${age}` : ""}
        </Text>

        {location && <Text muted>{location}</Text>}
      </View>

      {bio && (
        <Text muted className="text-center">
          {bio}
        </Text>
      )}
    </View>
  );
}
