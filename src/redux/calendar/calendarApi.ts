import { createApi } from '@reduxjs/toolkit/query/react';
import { CalendarResponseType } from 'types/types/CalendarResponseType';
import { DayInfoType } from 'types/types/DayType';
import { CreateDayDto } from 'types/dto/CreateDayDto';
import { UpdateDayDto } from 'types/dto/UpdateDayDto';
import axiosBaseQuery from 'api/axiosBaseQuery';

const tags = { Calendars: 'calendars' };

export const calendarApi = createApi({
  reducerPath: 'calendarApi',
  tagTypes: [tags.Calendars],
  baseQuery: axiosBaseQuery('calendars'),
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
          data: createDayDto,
        }),
        invalidatesTags: [tags.Calendars],
      }),
      updateDay: build.mutation<CalendarResponseType<DayInfoType>, UpdateDayDto>({
        query: ({ dayId, updateDayDto }) => ({
          url: `update-day/${dayId}`,
          method: 'PATCH',
          data: updateDayDto,
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
