import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getData, saveItem, deleteItem } from '../../services/api';
// import {
//   getContactsRequest,
//   getContactsSuccess,
//   getContactsError,
//   addContactsRequest,
//   addContactsSuccess,
//   addContactsError,
//   removeContactRequest,
//   removeContactSuccess,
//   removeContactError,
// } from './contactsAction';

const CONTACTSLOCALE = 'contacts';

const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    try {
      const { data } = await axios.get(`/${CONTACTSLOCALE}`, {
        headers: {
          Authorization: token,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  try {
    const { data } = await axios.post(`/${CONTACTSLOCALE}`, contact, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.statusText);
  }
});

const removeContact = createAsyncThunk('contacts/removeContact', async (id, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  try {
    const { data } = await axios.delete(`/${CONTACTSLOCALE}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.statusText);
  }
});

// const getContacts = () => async dispatch => {
//   dispatch(getContactsRequest());
//   try {
//     const contatcs = await getData(CONTACTSLOCALE);
//     dispatch(getContactsSuccess(contatcs));
//   } catch (error) {
//     dispatch(getContactsError(error.message));
//   }
// };

// const addContact = contact => async dispatch => {
//   dispatch(addContactsRequest());
//   try {
//     const newContact = await saveItem(CONTACTSLOCALE, contact);
//     dispatch(addContactsSuccess(newContact));
//   } catch (error) {
//     dispatch(addContactsError(error.message));
//   }
// };

// const removeContact = id => async dispatch => {
//   dispatch(removeContactRequest());
//   try {
//     const deletedContact = await deleteItem(CONTACTSLOCALE, id);
//     dispatch(removeContactSuccess(deletedContact));
//   } catch (error) {
//     dispatch(removeContactError(error.message));
//   }
// };

export { getContacts, addContact, removeContact };
