import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsReducer';
// import { itemsSlice, filterSlice } from './contacts/contactsSlice';

// const contactsReducer = combineReducers({
//   [itemsSlice.name]: itemsSlice.reducer,
//   [filterSlice.name]: filterSlice.reducer,
// });

const reducer = combineReducers({
  contacts: contactsReducer.reducer,
});

const store = configureStore({
  reducer,
});

export default store;

// import { createStore, combineReducers } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';

// Old redux

// const store = createStore(
//   combineReducers({
//     contacts: contactsReducer,
//   }),
//   devToolsEnhancer(),
// );
