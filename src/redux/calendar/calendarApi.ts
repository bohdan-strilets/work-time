import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'redux/store';
import { API_URL } from 'api';
import { CalendarResponseType } from 'types/types/CalendarResponseType';
import { DayInfoType } from 'types/types/DayType';
import { CreateDayDto } from 'types/dto/CreateDayDto';
import { UpdateDayDto } from 'types/dto/UpdateDayDto';

const tags = { Calendars: 'calendars' };

export const calendarApi = createApi({
  reducerPath: 'calendarApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}api/v1/calendars`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [tags.Calendars],
  endpoints: builder => ({
    getAllDaysInfo: builder.query<CalendarResponseType<DayInfoType[]>, void>({
      query: () => ({ url: 'all-days' }),
      providesTags: [tags.Calendars],
    }),
    getOneDayInfo: builder.query<CalendarResponseType<DayInfoType>, string>({
      query: dayId => ({ url: `one-day/${dayId}` }),
      providesTags: [tags.Calendars],
    }),
    createDay: builder.mutation<CalendarResponseType<DayInfoType>, CreateDayDto>({
      query: createDayDto => ({
        url: 'create-day',
        method: 'POST',
        body: createDayDto,
      }),
      invalidatesTags: [tags.Calendars],
    }),
    updateDay: builder.mutation<CalendarResponseType<DayInfoType>, UpdateDayDto>({
      query: ({ dayId, updateDayDto }) => ({
        url: `update-day/${dayId}`,
        method: 'PATCH',
        body: updateDayDto,
      }),
      invalidatesTags: [tags.Calendars],
    }),
    deleteDay: builder.mutation<CalendarResponseType<DayInfoType>, string>({
      query: dayId => ({
        url: `delete-day/${dayId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tags.Calendars],
    }),
  }),
});

export const {
  useGetAllDaysInfoQuery,
  useGetOneDayInfoQuery,
  useCreateDayMutation,
  useUpdateDayMutation,
  useDeleteDayMutation,
} = calendarApi;