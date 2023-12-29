import { useEffect, useState } from 'react';
import { month as monthName } from 'utilities/DefaultCalendarData';

const useTime = () => {
  const [date, setDate] = useState(new Date());

  const year = date.getFullYear();
  const indexMonth = date.getMonth();
  const month = monthName[indexMonth];
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return `${day} ${month} ${year} | ${hours}:${minutes}:${seconds}`;
};

export default useTime;
