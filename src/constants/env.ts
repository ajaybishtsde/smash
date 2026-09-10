const API_URL = process.env.EXPO_PUBLIC_API_URL;

if (!API_URL) {
  console.warn(
    'EXPO_PUBLIC_API_URL is not set. Copy .env.example to .env and configure your API URL.',
  );
}

export const env = {
  apiUrl: API_URL ?? 'http://localhost:3000',
} as const;
