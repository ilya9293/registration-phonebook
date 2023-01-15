import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, signOut, getUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  loading: false,
  loadingUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(signUp.fulfilled, (state, { payload }) => ({
        ...state,
        user: {
          name: payload.user.name,
          email: payload.user.email,
        },
        token: payload.token,
        loading: false,
      }))
      .addCase(signUp.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
  },
});

export default authSlice.reducer;
