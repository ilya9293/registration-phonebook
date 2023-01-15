import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsReducer } from './contacts/contactsReducer';
import authReducer from './auth/authSlice';
// import { itemsSlice, filterSlice } from './contacts/contactsSlice';

// const contactsReducer = combineReducers({
//   [itemsSlice.name]: itemsSlice.reducer,
//   [filterSlice.name]: filterSlice.reducer,
// });

// const reducer = combineReducers({
//   auth: authReducer,
//   contacts: contactsReducer.reducer,
// });

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    contacts: contactsReducer.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };

// import { createStore, combineReducers } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';

// Old redux

// const store = createStore(
//   combineReducers({
//     contacts: contactsReducer,
//   }),
//   devToolsEnhancer(),
// );
