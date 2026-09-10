import axios from 'axios';

import { env } from '@/constants/env';

export const apiClient = axios.create({
  baseURL: env.apiUrl,
  timeout: 15_000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Request interceptors (auth tokens, etc.) can be added here later.
apiClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

// Response interceptors (error normalization, refresh tokens, etc.) can be added here later.
apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);
