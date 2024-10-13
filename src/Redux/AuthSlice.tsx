import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '@/utils/supabase';
import Cookies from 'js-cookie';

interface AuthState {
  email: string;
  password: string;
  confirmPassword: string;
  error: string | null;
  loading: boolean;
  showForgotPassword: boolean;
}

const initialState: AuthState = {
  email: '',
  password: '',
  confirmPassword: '',
  error: null,
  loading: false,
  showForgotPassword: false,
};

// Async thunk actions for login, signup, reset password, etc.
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error?.message === 'Invalid login credentials') {
        return rejectWithValue('Invalid email');
      }
      if (error) throw error;

      const now = new Date();
      const expiresIn = new Date(now.getTime() + 5 * 60 * 1000);
      Cookies.set('access_token', data.session?.access_token || '', { expires: expiresIn });
      
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async ({ email, password, confirmPassword }: { email: string; password: string; confirmPassword: string }, { rejectWithValue }) => {
    try {
      if (password !== confirmPassword) throw new Error('Passwords do not match');
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      return 'Signup successful';
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email: string, { rejectWithValue }) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://localhost:3001/reset-password',
      });
      if (error) throw error;
      return 'Password reset email sent!';
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ password, confirmPassword }: { password: string; confirmPassword: string }, { rejectWithValue }) => {
    try {
      if (password !== confirmPassword) throw new Error('Passwords do not match');
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      return 'Password updated successfully';
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setShowForgotPassword: (state, action) => {
      state.showForgotPassword = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.showForgotPassword = true;
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setEmail, setPassword, setConfirmPassword, setShowForgotPassword, clearError } = authSlice.actions;

export default authSlice.reducer;
