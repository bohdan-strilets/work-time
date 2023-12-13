import { CreateDayDto } from './CreateDayDto';

export type UpdateDayDto = {
  dayId: string;
  updateDayDto: CreateDayDto;
};
