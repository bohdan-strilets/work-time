import { ThemeEnum } from 'types/enums/ThemeEnum';
import { LanguageEnum } from 'types/enums/LanguageEnum';

export type SettingsSliceState = {
  theme: ThemeEnum;
  language: LanguageEnum;
  soundEnabled: boolean;
  volume: number;
};
