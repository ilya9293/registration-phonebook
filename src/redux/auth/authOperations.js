import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

const signUp = createAsyncThunk('auth/signUp', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/signup`, credentials);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.statusText);
  }
});

const signIn = createAsyncThunk('auth/signIn', async credentials => {});

const signOut = createAsyncThunk('auth/signOut', async () => {});

const getUser = createAsyncThunk('auth/getUser', async (_, thunkAPI) => {
  //   console.log(thunkAPI);
  const token = thunkAPI.getState().auth.token;
  if (!token) {
    thunkAPI.rejectWithValue();
  }
  try {
    const { data } = await axios.get(`${BASE_URL}/users/current`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.statusText);
  }
});

export { signUp, signIn, signOut, getUser };
