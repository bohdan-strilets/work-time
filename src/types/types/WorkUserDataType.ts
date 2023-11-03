import { Status } from "types/Enums/StatusEnum";

export type DayInfoType = {
  status: Status;
  numberHoursWorked: number;
  time: string;
  workShiftNumber: 0 | 1 | 2;
  additionalHours: boolean;
};

export type WorkUserDataType = {
  id: string;
  data: { [key: string]: DayInfoType };
};
