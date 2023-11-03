import { useState, useRef, useEffect } from "react";
import { Month } from "types/Enums/CalendarEnum";
import { DayInfoType } from "types/types/WorkUserDataType";
import { month as monthNames, weekdays } from "utilities/DefaultCalendarData";
import useModalWindow from "hooks/useModalWindow";
import WorkUserData from "utilities/GlobalExampleData";

export const useCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<null | Date>(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const yearSelect = useRef<null | HTMLSelectElement>(null);
  const [dayInfo, setDayInfo] = useState<DayInfoType | null>(null);

  const { modalsName, openModal } = useModalWindow();

  useEffect(() => {
    const newDate = new Date(selectedYear, selectedMonth);
    setDate(newDate);
  }, [selectedMonth, selectedYear]);

  const handlePrevMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth() - 1;
    const newDate = new Date(year, month);
    setDate(newDate);
    setSelectedMonth(month);
  };

  const handleNextMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const newDate = new Date(year, month);
    setDate(newDate);
    setSelectedMonth(month);
  };

  const handleChangeYear = () => {
    const year = yearSelect.current?.value;
    if (year) {
      setSelectedYear(Number(year));
    }
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
    const dayIndex = date?.getDay();
    const day = weekdays[dayIndex ? dayIndex : 0];
    return `${dayNumber} ${month} ${year} - ${day}`;
  };

  const handleCellClick = (date: Date) => {
    const dateCell = date.toLocaleDateString().replaceAll(".", "-");
    const informationAboutDay = WorkUserData.filter(
      (item) => item.data[dateCell]
    );
    setDayInfo(informationAboutDay[0]?.data[dateCell]);
    handleDayClick(date);
    openModal(modalsName.cellDay);
  };

  const checkDayStatus = (date: number | Date | undefined) => {
    if (date instanceof Date) {
      const dateCell = date.toLocaleDateString().replaceAll(".", "-");
      const informationAboutDay = WorkUserData.filter(
        (item) => item.data[dateCell]
      );
      return informationAboutDay[0]?.data[dateCell].status;
    }
  };

  return {
    handlePrevMonth,
    handleChangeYear,
    handleChangeMonth,
    date,
    yearSelect,
    handleNextMonth,
    getMonthDate,
    areEqual,
    selectedDate,
    selectedMonth,
    selectedYear,
    dateTransform,
    handleCellClick,
    dayInfo,
    checkDayStatus,
  };
};

export default useCalendar;
