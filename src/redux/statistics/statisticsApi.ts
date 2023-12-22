import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from 'api/axiosBaseQuery';
import { StatisticsResponseType } from 'types/types/StatisticsResponseType';
import { StatisticsType } from 'types/types/StatisticsType';

const tags = { Statistics: 'statistics' };

export const statisticsApi = createApi({
  reducerPath: 'statisticsApi',
  tagTypes: [tags.Statistics],
  baseQuery: axiosBaseQuery('statistics'),
  endpoints(build) {
    return {
      getStatistics: build.query<StatisticsResponseType<StatisticsType>, void>({
        query: () => ({ url: 'get-statistics', method: 'GET' }),
        providesTags: [tags.Statistics],
        keepUnusedDataFor: 3,
      }),
    };
  },
});

export const { useGetStatisticsQuery } = statisticsApi;
