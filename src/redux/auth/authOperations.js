import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const BASE_URL = 'https://connections-api.herokuapp.com';

// const setToken = {
//   set(AUTH_TOKEN) {
//     axios.defaults.headers.common.Authorization = `Bearer ${AUTH_TOKEN}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const signUp = createAsyncThunk('auth/signUp', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`/users/signup`, credentials);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.statusText);
  }
});

const signIn = createAsyncThunk('auth/signIn', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`/users/login`, credentials);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.statusText);
  }
});

const signOut = createAsyncThunk('auth/signOut', async (_, { getState, rejectWithValue }) => {
  const token = getState().auth.token;
  try {
    const { data } = await axios.post(`/users/logout`, _, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    return rejectWithValue(error.response.statusText);
  }
});

const getUser = createAsyncThunk('auth/getUser', async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  if (!token) {
    return thunkAPI.rejectWithValue();
  }
  try {
    const { data } = await axios.get(`/users/current`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.statusText);
  }
});

export { signUp, signIn, signOut, getUser };
