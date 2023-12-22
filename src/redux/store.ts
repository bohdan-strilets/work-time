import { configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { persisteUserReducer } from './user/userSlice';
import { calendarApi } from './calendar/calendarApi';
import { statisticsApi } from './statistics/statisticsApi';

export const store = configureStore({
  reducer: {
    user: persisteUserReducer,
    [calendarApi.reducerPath]: calendarApi.reducer,
    [statisticsApi.reducerPath]: statisticsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(calendarApi.middleware)
      .concat(statisticsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
