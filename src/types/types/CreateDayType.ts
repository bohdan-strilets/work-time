import { Status } from 'types/enums/StatusEnum';

export type CreateDayType = {
  data: {
    [x: string]: {
      status: Status;
      numberHoursWorked: number;
      time: string;
      workShiftNumber: number;
      additionalHours: boolean;
      grossEarnings: number;
      netEarnings: number;
    };
  };
};
