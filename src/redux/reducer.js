import { combineReducers } from 'redux';
import { contactsSlice } from './contacts/contactsSlice';
import { filterSlice } from './contacts/filterSlice';
//
// export const reducer = combineReducers({
//   contacts: contactsSlice.reducer,
//   filter: filterSlice.reducer,
// });

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { authSlice } from './auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const reducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
  auth: persistReducer(authPersistConfig, authSlice.reducer),
});
