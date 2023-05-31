import { configureStore } from '@reduxjs/toolkit';
// import { fetchContacts } from './contacts/operations';
import { reducer } from './reducer';
//
// export const store = configureStore({
//   reducer: reducer,
// });
//
// store.dispatch(fetchContacts());


import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
