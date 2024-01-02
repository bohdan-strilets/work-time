import { FilteredDataResultType } from 'types/types/FilteredDataResultType';
import { useGetAllDaysInfoQuery } from '../redux/calendar/calendarApi';

const useListDays = () => {
  const { data } = useGetAllDaysInfoQuery();
  const days = data?.data ?? [];

  const filteredData = days.reduce((acc: FilteredDataResultType[], item) => {
    const key = Object.keys(item.data)[0];
    const dateArr = key.split('-');
    const monthName = dateArr[1];
    const year = dateArr[2];

    const existingMonth = acc.find(
      (entry: FilteredDataResultType) => entry.month === monthName && entry.year === year,
    );

    if (existingMonth) {
      existingMonth.data.push({ ...item });
    } else {
      acc.push({
        month: monthName,
        year,
        data: [{ ...item }],
      });
    }

    return acc;
  }, []);

  const compareDates = (a: FilteredDataResultType, b: FilteredDataResultType) => {
    const yearComparison = b.year.localeCompare(a.year);
    if (yearComparison !== 0) {
      return yearComparison;
    }
    return b.month.localeCompare(a.month);
  };

  const sortedFilteredData = filteredData.sort(compareDates);

  return { data, sortedFilteredData };
};

export default useListDays;
