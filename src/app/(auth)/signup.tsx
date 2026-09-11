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
import { signUp } from "@/lib/auth/mockAuth";
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
      firstName: "",
      lastName: "",
      phoneNumber: "",
      terms: false,
    },
  });

  async function handleSignup(data: SignupFormData) {
    const user = await signUp({
      phoneNumber: data.phoneNumber,
      firstName: data.firstName,
      lastName: data.lastName,
    });

    dispatch(signIn(user));
  }

  return (
    <Screen scrollable contentClassName="gap-6">
      {/* Logo */}
      <View className="items-center pt-12">
        <Image
          source={images.logo}
          className="h-40 w-56"
          resizeMode="contain"
        />
      </View>

      {/* Header */}
      <View className="gap-2">
        <Text variant="title">Create account</Text>
        <Text muted>Find your vibe. Make a connection.</Text>
      </View>

      {/* First Name */}
      <Controller
        control={control}
        name="firstName"
        render={({ field: { onChange, value } }) => (
          <Input
            label="First name"
            placeholder="Enter your first name"
            value={value}
            onChangeText={onChange}
            autoCapitalize="words"
            error={errors.firstName?.message}
          />
        )}
      />

      {/* Last Name */}
      <Controller
        control={control}
        name="lastName"
        render={({ field: { onChange, value } }) => (
          <Input
            label="Last name"
            placeholder="Enter your last name"
            value={value}
            onChangeText={onChange}
            autoCapitalize="words"
            error={errors.lastName?.message}
          />
        )}
      />

      {/* Phone Number */}
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
            error={errors.phoneNumber?.message}
          />
        )}
      />

      {/* Terms */}
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

      {/* Submit */}
      <Button
        title="Create account"
        loading={isSubmitting}
        onPress={handleSubmit(handleSignup)}
      />

      {/* Login */}
      <Text className="text-center">
        Already have an account?{" "}
        <Link href="/login">
          <Text className="text-primary">Sign in</Text>
        </Link>
      </Text>
    </Screen>
  );
}
