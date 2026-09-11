import type { AuthUser } from "@/types/auth";

type SignupPayload = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

type LoginPayload = {
  phoneNumber: string;
};

/**
 * Placeholder auth helpers. Replace with real API calls when the backend is ready.
 */
export async function signIn({ phoneNumber }: LoginPayload): Promise<AuthUser> {
  await delay(400);

  return {
    id: "mock-user-id",
    phoneNumber,
    name: "User",
  };
}

export async function signUp({
  firstName,
  lastName,
  phoneNumber,
}: SignupPayload): Promise<AuthUser> {
  return signIn({ phoneNumber });
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
