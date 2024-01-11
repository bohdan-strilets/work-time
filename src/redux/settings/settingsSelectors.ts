import { RootState } from 'redux/store';

export const getTheme = (state: RootState) => state.settings.theme;
export const getLanguage = (state: RootState) => state.settings.language;
export const getSoundEnabled = (state: RootState) => state.settings.soundEnabled;
