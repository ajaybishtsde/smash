import {
  SignupFormData,
  signupSchema,
} from "@/components/schemas/signupSchema";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Screen } from "@/components/ui/Screen";
import { Text } from "@/components/ui/Text";
import { images } from "@/constants/images";
import Checkbox from "@/features/auth/components/Checkbox";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { mockSignUp } from "@/lib/auth/mockAuth";
import { signIn } from "@/store/authSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Image, View } from "react-native";

export default function SignupScreen() {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      terms: false,
    },
  });

  async function handleSignup(data: SignupFormData) {
    const user = await mockSignUp({
      email: data.email,
      name: data.name,
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
      <View className="gap-2">
        <Text variant="title">Create account</Text>
        <Text muted>Find your vibe. Make a connection.</Text>
      </View>

      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <Input
            label="Name"
            placeholder="Your name"
            value={value}
            onChangeText={onChange}
            error={errors.name?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <Input
            label="Name"
            placeholder="Your name"
            value={value}
            onChangeText={onChange}
            error={errors.name?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="terms"
        render={({ field: { onChange, value } }) => (
          <View className="gap-1">
            <Checkbox checked={value} handleChecked={() => onChange(!value)} />

            {errors.terms?.message && (
              <Text className="text-error">{errors.terms.message}</Text>
            )}
          </View>
        )}
      />

      <Button
        title="Create account"
        loading={isSubmitting}
        onPress={handleSubmit(handleSignup)}
      />

      <Text className="text-center">
        Already have an account?{" "}
        <Link href="/login">
          <Text className="text-primary">Sign in</Text>
        </Link>
      </Text>
    </Screen>
  );
}
