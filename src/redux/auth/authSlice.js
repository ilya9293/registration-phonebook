import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //  builder.addCase(fetchUserById.pending, (state, action) => {});
  },
});
