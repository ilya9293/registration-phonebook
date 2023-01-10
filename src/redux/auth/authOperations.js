import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const signUp = createAsyncThunk('auth/signUp', async credentials => {});

const signIn = createAsyncThunk('auth/signIn', async credentials => {});

const signOut = createAsyncThunk('auth/signOut', async () => {});

const getUser = createAsyncThunk('auth/getUser', async () => {});
