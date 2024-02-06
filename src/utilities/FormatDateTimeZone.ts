import { formatInTimeZone } from 'date-fns-tz';

export const FormatDateTimeZone = (date: Date | string) => {
  return formatInTimeZone(date, 'Europe/Paris', 'yyyy-MM-dd HH:mm:ss zzz');
};
