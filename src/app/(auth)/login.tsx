import { Link } from "expo-router";
import { useState } from "react";
import { Image, View } from "react-native";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Screen } from "@/components/ui/Screen";
import { Text } from "@/components/ui/Text";
import { images } from "@/constants/images";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { mockSignIn } from "@/lib/auth/mockAuth";
import { signIn } from "@/store/authSlice";

export default function LoginScreen() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email.trim()) {
      return;
    }

    setLoading(true);

    try {
      const user = await mockSignIn({ email: email.trim() });
      dispatch(signIn(user));
    } finally {
      setLoading(false);
    }
  }

  return (
    <Screen scrollable contentClassName="gap-8">
      {/* Logo */}
      <View className="items-center pt-12">
        <Image
          source={images.logo}
          className="h-40 w-56"
          resizeMode="contain"
        />
      </View>

      {/* Login content */}
      <View className="gap-6">
        <View className="gap-2">
          <Text variant="title">Welcome to Smash</Text>
        </View>

        <Input
          label="Email"
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
        />

        <Button title="Sign in" loading={loading} onPress={handleLogin} />

        <Text className="text-center">
          No account?{" "}
          <Link href="/signup">
            <Text className="text-primary">Sign up</Text>
          </Link>
        </Text>
      </View>
    </Screen>
  );
}
