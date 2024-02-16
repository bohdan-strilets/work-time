import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from 'api/axiosBaseQuery';
import { WeatherDto } from 'types/dto/WeatherDto';
import { WeatherResponseType } from 'types/types/WeatherResponseType';
import { WeatherType } from 'types/types/WeatherType';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: axiosBaseQuery('weather'),
  endpoints(build) {
    return {
      getWeather: build.mutation<WeatherResponseType<WeatherType>, WeatherDto>({
        query: weatherDto => ({ url: 'get-weather', method: 'POST', data: weatherDto }),
      }),
    };
  },
});

export const { useGetWeatherMutation } = weatherApi;
