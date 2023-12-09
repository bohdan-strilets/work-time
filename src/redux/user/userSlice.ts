import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { UserSliceState } from 'types/types/UserSliceState';
import operations from './userOperations';
import { ENTITY_NAME } from './config';

const initialState: UserSliceState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const userPersistConfig = {
  key: ENTITY_NAME,
  storage,
  whitelist: ['token'],
};

export const userSlice = createSlice({
  name: ENTITY_NAME,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(operations.registration.fulfilled, (state, action) => {
        if (action.payload && action.payload.tokens && action.payload.data) {
          state.user = action.payload.data;
          state.token = action.payload?.tokens?.accessToken;
          state.isLoggedIn = true;
        }
      })
      .addCase(operations.googleAuth.fulfilled, (state, action) => {
        if (action.payload && action.payload.tokens && action.payload.data) {
          state.user = action.payload.data;
          state.token = action.payload?.tokens?.accessToken;
          state.isLoggedIn = true;
        }
      })
      .addCase(operations.logout.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

export const persisteUserReducer = persistReducer(userPersistConfig, userSlice.reducer);