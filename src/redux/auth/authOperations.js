import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

const signUp = createAsyncThunk('auth/signUp', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/signup`, credentials);
    return data;
  } catch (error) {
    rejectWithValue(error.message);
  }
});

const signIn = createAsyncThunk('auth/signIn', async credentials => {});

const signOut = createAsyncThunk('auth/signOut', async () => {});

const getUser = createAsyncThunk('auth/getUser', async () => {});

export { signUp, signIn, signOut, getUser };
