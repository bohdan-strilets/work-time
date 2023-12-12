import { Status } from 'types/enums/StatusEnum';

export type AddInformationFormInputs = {
  status: Status;
  startJob?: string;
  finishJob?: string;
  additionalHours?: boolean;
  selectVacationHours?: boolean;
};
