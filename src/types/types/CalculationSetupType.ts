import { ContractTypeEnum } from 'types/enums/ContractTypeEnum';

export type CalculationSetupType = {
  contractType: ContractTypeEnum;
  areYouAlready26Years: boolean;
  ppk: boolean;
  ppkRate: number;
};
