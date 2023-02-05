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
  reducers: {
    errorReset: state => ({ ...state, error: null }),
  },
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
      }))

      .addCase(signIn.pending, state => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(signIn.fulfilled, (state, { payload }) => ({
        ...state,
        user: {
          name: payload.user.name,
          email: payload.user.email,
        },
        token: payload.token,
        loading: false,
      }))
      .addCase(signIn.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))

      .addCase(signOut.pending, state => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(signOut.fulfilled, (state, { payload }) => initialState)
      .addCase(signOut.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))

      .addCase(getUser.pending, state => ({
        ...state,
        loadingUser: true,
        error: null,
      }))
      .addCase(getUser.fulfilled, (state, { payload }) => ({
        ...state,
        user: {
          name: payload.name,
          email: payload.email,
        },
        loadingUser: false,
      }))
      .addCase(getUser.rejected, (state, { payload }) => ({
        ...state,
        loadingUser: false,
        token: null,
        error: payload,
      }));
  },
});

export const { errorReset } = authSlice.actions;

export default authSlice.reducer;
