import { LoginFormData, loginSchema } from "@/components/schemas/loginSchema";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Screen } from "@/components/ui/Screen";
import { Text } from "@/components/ui/Text";
import { images } from "@/constants/images";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { signIn as signInApi } from "@/lib/auth/mockAuth";
import { signIn } from "@/store/authSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Image, View } from "react-native";

export default function LoginScreen() {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  async function handleLogin(data: LoginFormData) {
    const user = await signInApi({
      phoneNumber: data.phoneNumber,
    });

    dispatch(signIn(user));
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

        <Controller
          control={control}
          name="phoneNumber"
          render={({ field: { onChange, value } }) => (
            <Input
              label="Phone number"
              placeholder="Enter your phone number"
              value={value}
              onChangeText={onChange}
              keyboardType="phone-pad"
              autoComplete="tel"
              maxLength={10}
              error={errors.phoneNumber?.message}
            />
          )}
        />

        <Button
          title="Sign in"
          loading={isSubmitting}
          onPress={handleSubmit(handleLogin)}
        />

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
