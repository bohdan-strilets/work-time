import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { ThemeEnum } from 'types/enums/ThemeEnum';
import { SettingsSliceState } from 'types/types/SettingsSliceState';
import { ENTITY_NAME } from './config';

const initialState: SettingsSliceState = {
  theme: ThemeEnum.Light,
};

const settingsPersistConfig = {
  key: ENTITY_NAME,
  storage,
};

export const settingsSlice = createSlice({
  name: ENTITY_NAME,
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<ThemeEnum>) {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = settingsSlice.actions;
export const persisteSettingsReducer = persistReducer(settingsPersistConfig, settingsSlice.reducer);
