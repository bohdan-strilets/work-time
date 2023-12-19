import type { AxiosRequestConfig, AxiosError } from 'axios';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import { CalendarResponseType } from 'types/types/CalendarResponseType';
import api, { API_URL } from 'api';
import { DayInfoType } from 'types/types/DayType';
import { CreateDayDto } from 'types/dto/CreateDayDto';
import { UpdateDayDto } from 'types/dto/UpdateDayDto';

const tags = { Calendars: 'calendars' };

const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      headers?: AxiosRequestConfig['headers'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await api({
        url: `${API_URL}api/v1/calendars/${url}`,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return { error: { status: err.response?.status, data: err.response?.data || err.message } };
    }
  };

export const calendarApi = createApi({
  reducerPath: 'calendarApi',
  tagTypes: [tags.Calendars],
  baseQuery: axiosBaseQuery(),
  endpoints(build) {
    return {
      getAllDaysInfo: build.query<CalendarResponseType<DayInfoType[]>, void>({
        query: () => ({ url: 'all-days', method: 'GET' }),
        providesTags: [tags.Calendars],
      }),
      getOneDayInfo: build.query<CalendarResponseType<DayInfoType>, string>({
        query: dayId => ({ url: `one-day/${dayId}`, method: 'GET' }),
        providesTags: [tags.Calendars],
      }),
      createDay: build.mutation<CalendarResponseType<DayInfoType>, CreateDayDto>({
        query: createDayDto => ({
          url: 'create-day',
          method: 'POST',
          body: createDayDto,
        }),
        invalidatesTags: [tags.Calendars],
      }),
      updateDay: build.mutation<CalendarResponseType<DayInfoType>, UpdateDayDto>({
        query: ({ dayId, updateDayDto }) => ({
          url: `update-day/${dayId}`,
          method: 'PATCH',
          body: updateDayDto,
        }),
        invalidatesTags: [tags.Calendars],
      }),
      deleteDay: build.mutation<CalendarResponseType<DayInfoType>, string>({
        query: dayId => ({
          url: `delete-day/${dayId}`,
          method: 'DELETE',
        }),
        invalidatesTags: [tags.Calendars],
      }),
    };
  },
});

export const {
  useGetAllDaysInfoQuery,
  useGetOneDayInfoQuery,
  useCreateDayMutation,
  useUpdateDayMutation,
  useDeleteDayMutation,
} = calendarApi;
