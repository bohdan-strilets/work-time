export type WeatherProps = {
  averageTemperature: number;
  weatherCondition: string;
  weatherIcon: string;
  maximumTemperature: number;
  minimumTemperature: number;
};

export type TemperatureValueProps = {
  margin?: string;
  color?: string;
  fontSize?: string;
};
