export type WeatherType = {
  averageTemperature: number;
  weatherCondition: string;
  weatherIcon: string;
  maximumTemperature: number;
  minimumTemperature: number;
  location: {
    country: string;
    city: string;
  };
};
