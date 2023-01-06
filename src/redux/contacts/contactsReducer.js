// import { combineReducers } from 'redux';
import {
  //  createReducer,
  createSlice,
} from '@reduxjs/toolkit';
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
//   filterSet,
// } from '../contacts/contactsAction';
import { getContacts, addContact, removeContact } from './contactsOperations';

const initialState = {
  items: [],
  loading: false,
  error: null,
  filter: '',
};

const contactsReducer = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterSet: (state, action) => ({ ...state, filter: action.payload }),
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, state => ({
        ...state,

        loading: true,
        error: null,

        //   state.firstLoading = true;
        //   state.loading = true;
        //   state.error = null;
      }))
      .addCase(getContacts.fulfilled, (state, action) => ({
        ...state,
        items: action.payload,

        loading: false,

        //   state.items = action.payload;
        //   state.firstLoading = false;
        //   state.loading = false;
      }))
      .addCase(getContacts.rejected, (state, action) => ({
        ...state,

        error: action.payload,

        //   state.firstLoading = false;
        //   state.error = action.payload;
      }))

      .addCase(addContact.pending, state => ({
        ...state,
        loading: true,
        error: null,

        //   state.loading = true;
        //   state.error = null;
      }))
      .addCase(addContact.fulfilled, (state, action) => ({
        ...state,
        items: [...state.items, action.payload],
        loading: false,

        //   state.items = [...state.items, action.payload];
        //   state.loading = false;
      }))
      .addCase(addContact.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,

        //   state.loading = false;
        //   state.error = action.payload;
      }))

      .addCase(removeContact.pending, state => ({
        ...state,
        loading: true,
        error: null,

        //   state.loading = true;
        //   state.error = null;
      }))
      .addCase(removeContact.fulfilled, (state, action) => ({
        ...state,
        items: state.items.filter(contact => contact.id !== action.payload.id),
        loading: false,

        //   state.items = state.items.filter(contact => contact.id !== action.payload.id);
        //   state.loading = false;
      }))
      .addCase(removeContact.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,

        //   state.loading = false;
        //   state.error = action.payload;
      }));
  },
});

// const itemsReducer = createReducer([], builder => {
//   builder
//     .addCase(getContactsSuccess, (_, action) => action.payload)
//     .addCase(addContactsSuccess, (state, action) => [...state, action.payload])
//     .addCase(removeContactSuccess, (state, action) =>
//       state.filter(contact => contact.id !== action.payload.id),
//     );
// });

// const firstLoadingReducer = createReducer(false, builder => {
//   builder
//     .addCase(getContactsRequest, () => true)
//     .addCase(getContactsSuccess, () => false)
//     .addCase(getContactsError, () => false);
// });

// const loadingReducer = createReducer(false, builder => {
//   builder
//     .addCase(addContactsRequest, () => true)
//     .addCase(addContactsSuccess, () => false)
//     .addCase(addContactsError, () => false)

//     .addCase(removeContactRequest, () => true)
//     .addCase(removeContactSuccess, () => false)
//     .addCase(removeContactError, () => false);
// });

// const errorReducer = createReducer(null, builder => {
//   builder
//     .addCase(getContactsRequest, () => null)
//     .addCase(getContactsError, (_, { payload }) => payload)

//     .addCase(addContactsRequest, () => null)
//     .addCase(addContactsError, (_, { payload }) => payload)

//     .addCase(removeContactRequest, () => null)
//     .addCase(removeContactError, (_, { payload }) => payload);
// });

// const filterReducer = createReducer('', builder => {
//   builder.addCase(filterSet, (_, action) => action.payload);
// });

// const contactsReducer = combineReducers({
//   items: itemsReducer,
//   firstLoading: firstLoadingReducer,
//   loading: loadingReducer,
//   error: errorReducer,
//   filter: filterReducer,
// });

export { contactsReducer };
