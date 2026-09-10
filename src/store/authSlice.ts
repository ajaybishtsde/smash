import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { AuthUser } from '@/types/auth';

type AuthState = {
  isAuthenticated: boolean;
  hasCompletedOnboarding: boolean;
  user: AuthUser | null;
};

const initialState: AuthState = {
  isAuthenticated: false,
  hasCompletedOnboarding: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<AuthUser>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    signOut: (state) => {
      state.isAuthenticated = false;
      state.hasCompletedOnboarding = false;
      state.user = null;
    },
    completeOnboarding: (state) => {
      state.hasCompletedOnboarding = true;
    },
    resetOnboarding: (state) => {
      state.hasCompletedOnboarding = false;
    },
  },
});

export const { signIn, signOut, completeOnboarding, resetOnboarding } = authSlice.actions;
export default authSlice.reducer;
