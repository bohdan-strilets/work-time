import { WeatherType } from 'types/types/WeatherType';

export type WeatherProps = Pick<
  WeatherType,
  | 'averageTemperature'
  | 'weatherCondition'
  | 'weatherIcon'
  | 'maximumTemperature'
  | 'minimumTemperature'
  | 'location'
>;

export type TemperatureValueProps = {
  margin?: string;
  color?: string;
  fontSize?: string;
};
