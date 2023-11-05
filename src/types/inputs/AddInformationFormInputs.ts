import { DayInfoType } from "types/types/WorkUserDataType";

export type AddInformationFormInputs = {
  status: Pick<DayInfoType, "status">;
  startJob?: string;
  workShiftNumber?: Pick<DayInfoType, "workShiftNumber">;
  additionalHours?: Pick<DayInfoType, "additionalHours">;
};
