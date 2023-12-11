import { Status } from 'types/enums/StatusEnum';
import { WorkShiftNumber } from 'types/enums/WorkShiftNumber';

export type DayDataType = {
  status: Status;
  numberHoursWorked: number;
  time: string;
  workShiftNumber: WorkShiftNumber;
  additionalHours: boolean;
};

export type DayInfoType = {
  _id: string;
  owner: string;
  data: Map<string, DayDataType>;
  createdAt: Date;
  updatedAt: Date;
};
