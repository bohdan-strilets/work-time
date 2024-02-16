import { WeatherType } from './WeatherType';

export type WeatherResponseType<W = WeatherType> = {
  status: string;
  code: number;
  success: boolean;
  message?: string;
  data?: W;
};
