import { Link } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Screen } from '@/components/ui/Screen';
import { Text } from '@/components/ui/Text';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { mockSignUp } from '@/lib/auth/mockAuth';
import { signIn } from '@/store/authSlice';

export default function SignupScreen() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignup() {
    if (!email.trim()) {
      return;
    }

    setLoading(true);

    try {
      const user = await mockSignUp({ email: email.trim(), name: name.trim() || undefined });
      dispatch(signIn(user));
    } finally {
      setLoading(false);
    }
  }

  return (
    <Screen scrollable contentClassName="justify-center gap-6">
      <View className="gap-2">
        <Text variant="title">Create account</Text>
        <Text muted>Get started with Smash. Mock signup for now.</Text>
      </View>

      <Input label="Name" placeholder="Your name" value={name} onChangeText={setName} />

      <Input
        label="Email"
        autoCapitalize="none"
        autoComplete="email"
        keyboardType="email-address"
        placeholder="you@example.com"
        value={email}
        onChangeText={setEmail}
      />

      <Button title="Create account" loading={loading} onPress={handleSignup} />

      <Text className="text-center">
        Already have an account?{' '}
        <Link href="/login">
          <Text className="text-primary">Sign in</Text>
        </Link>
      </Text>
    </Screen>
  );
}
