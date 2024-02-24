import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Month } from 'types/enums/CalendarEnum';
import { month as monthNames } from 'utilities/defaultData/DefaultCalendarData';
import useModalWindow from 'hooks/useModalWindow';
import { useGetAllDaysInfoQuery } from '../redux/calendar/calendarApi';
import { DayInfoType, DayDataType } from 'types/types/DayType';
import { useDeleteDayMutation } from '../redux/calendar/calendarApi';
import { CalendarTypeEnum } from 'types/enums/CalendarTypeEnum';
import useSoundSprite from './useSoundSprite';
import { SoundNamesEnum } from 'types/enums/SoundNamesEnum';
import { CalendarLngKeys } from 'types/locales/CalendarLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { CalendarResponseType } from 'types/types/CalendarResponseType';
import CustomErrorHandler from 'utilities/CustomErrorHandler';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';
import { useGetAllTodoQuery } from '../redux/todo/todoApi';

export const useCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<null | Date>(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState<null | string | string[]>(
    new Date().getFullYear().toString(),
  );
  const [dayInfo, setDayInfo] = useState<DayDataType | null>(null);
  const [dayInfoId, setDayInfoId] = useState<null | string>(null);
  const [allDays, setAllDays] = useState<DayInfoType[] | null>(null);
  const [calendarType, setCalendarType] = useState<string | string[]>(CalendarTypeEnum.Calendar);

  const navigate = useNavigate();
  const { modalsName, openModal } = useModalWindow();
  const { data, isLoading } = useGetAllDaysInfoQuery();
  const [deleteDay, { isLoading: isDeleteLoading }] = useDeleteDayMutation();
  const { play } = useSoundSprite();
  const { t } = useTranslation();
  const { data: todos } = useGetAllTodoQuery();

  useEffect(() => {
    if (data && data.data) {
      setAllDays(data.data);
    }
  }, [data, data?.data]);

  useEffect(() => {
    const newDate = new Date(Number(selectedYear), selectedMonth);
    setDate(newDate);
  }, [selectedMonth, selectedYear]);

  const handlePrevMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth() - 1;
    const newDate = new Date(year, month);
    if (month <= 11 && month >= 0) {
      setDate(newDate);
      setSelectedMonth(month);
    }
  };

  const handleNextMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const newDate = new Date(year, month);
    if (month <= 11 && month >= 0) {
      setDate(newDate);
      setSelectedMonth(month);
    }
  };

  const handleChangeYear = (year: string | string[]) => {
    setSelectedYear(year);
  };

  const handleChangeMonth = (e: React.MouseEvent<HTMLButtonElement>) => {
    const month = e.currentTarget.value;
    setSelectedMonth(Number(month));
  };

  const handleDayClick = (date: Date) => {
    if (date instanceof Date) {
      setSelectedDate(date);
    }
  };

  const isLeapYear = (year: number) => {
    return !(year % 4 || (!(year % 100) && year % 400));
  };

  const getDayInMonth = (date: Date) => {
    const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = DAYS_IN_MONTH[month];

    if (isLeapYear(year) && month === Month.February) {
      return daysInMonth + 1;
    } else {
      return daysInMonth;
    }
  };

  const getDayOfWeek = (date: Date) => {
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0) return 6;
    return dayOfWeek - 1;
  };

  const getMonthDate = (year: number, month: number) => {
    const result: (undefined[] | number[] | Date[])[] = [];
    const daysInWeek = 7;
    const daysInMonth = getDayInMonth(date);
    const monthStartOn = getDayOfWeek(date);
    let day = 1;

    for (let i = 0; i < (daysInMonth + monthStartOn) / daysInWeek; i++) {
      result[i] = [];
      for (let j = 0; j < daysInWeek; j++) {
        if ((i === 0 && j < monthStartOn) || day > daysInMonth) {
          result[i][j] = undefined;
        } else {
          result[i][j] = new Date(year, month, day++);
        }
      }
    }

    return result;
  };

  const areEqual = (a: Date, b: Date): boolean | undefined => {
    if (a instanceof Date && b instanceof Date) {
      if (!a || !b) return false;

      return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
      );
    }
  };

  const dateTransform = (date: Date) => {
    const dayNumber = date?.getDate();
    const monthIndex = date?.getMonth();
    const month = monthNames[monthIndex ? monthIndex : 0];
    const year = date?.getFullYear();
    return `${dayNumber} ${month} ${year}`;
  };

  const handleCellClick = (date: Date) => {
    const dateCell = date.toLocaleDateString().replaceAll('.', '-');
    const informationAboutDay = allDays?.filter(item => item.data[dateCell]);
    if (informationAboutDay) {
      setDayInfo(informationAboutDay[0]?.data[dateCell]);
      setDayInfoId(informationAboutDay[0]?._id);
    }

    handleDayClick(date);
    openModal(modalsName.cellDay);
  };

  const getInformationForDay = (date: number | Date | undefined) => {
    if (date instanceof Date) {
      const dateCell = date.toLocaleDateString().replaceAll('.', '-');
      const informationAboutDay = allDays?.filter(item => item.data[dateCell]);
      if (informationAboutDay && informationAboutDay[0]) {
        const dayId = informationAboutDay[0]._id;
        const areTaskToday = todos?.data?.some(i => i.dayId === dayId);
        const response = { ...informationAboutDay[0]?.data[dateCell], areTaskToday };
        return response;
      }
    }
  };

  const deleteInformationForDay = async () => {
    if (dayInfoId) {
      await deleteDay(dayInfoId);
      try {
        navigate('/calendar');
        play({ id: SoundNamesEnum.Delete });
        toast.success(t(CalendarLngKeys.SuccessfullyDeleted, { ns: LocalesKeys.calendar }));
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError<CalendarResponseType>;
          if (axiosError.response) {
            const serverError = axiosError.response.data as CalendarResponseType;
            CustomErrorHandler(serverError);
          } else {
            toast.error(t(ErrorLngKeys.GeneralAxiosError, { ns: LocalesKeys.error }));
          }
        } else {
          toast.error(t(ErrorLngKeys.GeneralError, { ns: LocalesKeys.error }));
        }
      }
    }
  };

  const backToCurrentDate = () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    setSelectedMonth(month);
    setSelectedYear(year.toString());
  };

  const handleChangeCalendarType = (type: string | string[]) => {
    setCalendarType(type);
  };

  return {
    handlePrevMonth,
    handleChangeYear,
    handleChangeMonth,
    date,
    handleNextMonth,
    getMonthDate,
    areEqual,
    selectedDate,
    selectedMonth,
    selectedYear,
    dateTransform,
    handleCellClick,
    dayInfo,
    getInformationForDay,
    deleteInformationForDay,
    navigate,
    dayInfoId,
    backToCurrentDate,
    handleChangeCalendarType,
    calendarType,
    isLoading,
    isDeleteLoading,
  };
};

export default useCalendar;
