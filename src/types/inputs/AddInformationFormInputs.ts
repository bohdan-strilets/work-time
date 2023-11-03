import { DayInfoType } from "types/types/WorkUserDataType";

export type AddInformationFormInputs = Pick<
  DayInfoType,
  | "status"
  | "numberHoursWorked"
  | "time"
  | "workShiftNumber"
  | "additionalHours"
>;
