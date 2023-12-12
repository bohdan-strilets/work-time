import { DayDataType } from 'types/types/DayType';

export type CreateDayDto = {
  data: { [key: string]: DayDataType };
};
