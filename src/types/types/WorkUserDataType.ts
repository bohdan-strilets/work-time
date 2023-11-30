import { Status } from 'types/enums/StatusEnum';
import { WorkShiftNumber } from 'types/enums/WorkShiftNumber';

export type DayInfoType = {
  status: Status;
  numberHoursWorked: number;
  time: string;
  workShiftNumber: WorkShiftNumber;
  additionalHours: boolean;
};

export type WorkUserDataType = {
  id: string;
  data: { [key: string]: DayInfoType };
};
