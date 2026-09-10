import type { AuthUser } from '@/types/auth';

type MockCredentials = {
  email: string;
  name?: string;
};

/**
 * Placeholder auth helpers. Replace with real API calls when the backend is ready.
 */
export async function mockSignIn({ email, name }: MockCredentials): Promise<AuthUser> {
  await delay(400);

  return {
    id: 'mock-user-id',
    email,
    name: name ?? email.split('@')[0] ?? 'User',
  };
}

export async function mockSignUp({ email, name }: MockCredentials): Promise<AuthUser> {
  return mockSignIn({ email, name });
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
