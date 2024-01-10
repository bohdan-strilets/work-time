import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { ThemeEnum } from 'types/enums/ThemeEnum';
import { SettingsSliceState } from 'types/types/SettingsSliceState';
import { ENTITY_NAME } from './config';
import { LanguageEnum } from 'types/enums/LanguageEnum';
import { changeLang } from 'locales/config';

const initialState: SettingsSliceState = {
  theme: ThemeEnum.Light,
  language: LanguageEnum.en,
  soundEnabled: true,
  volume: 1,
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
    changeLanguage(state, action: PayloadAction<LanguageEnum>) {
      state.language = action.payload;
      changeLang(action.payload);
    },
    soundSwitch(state, action: PayloadAction<boolean>) {
      state.soundEnabled = action.payload;
    },
    changeVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },
  },
});

export const { changeTheme, changeLanguage, soundSwitch, changeVolume } = settingsSlice.actions;
export const persisteSettingsReducer = persistReducer(settingsPersistConfig, settingsSlice.reducer);
