import { Status } from 'types/enums/StatusEnum';
import { DayInfoType } from 'types/types/WorkUserDataType';

export type EditInformationFormInputs = {
  status: Status;
  startJob?: string;
  finishJob?: string;
  additionalHours?: boolean;
};
