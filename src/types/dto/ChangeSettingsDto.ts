import { ContractTypeEnum } from 'types/enums/ContractTypeEnum';

export type ChangeSettingsDto = {
  contractType?: ContractTypeEnum;
  areYouAlready26Years?: boolean;
  ppk?: boolean;
};
