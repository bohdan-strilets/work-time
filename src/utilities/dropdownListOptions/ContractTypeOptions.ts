import { translateLabel } from 'locales/config';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { ContractTypeEnum } from 'types/enums/ContractTypeEnum';

const ContractTypeOptions = [
  {
    id: 1,
    label: translateLabel(CommonLngKeys.ContractEmployment, LocalesKeys.common),
    value: ContractTypeEnum.ContractEmployment,
  },
  {
    id: 2,
    label: translateLabel(CommonLngKeys.MandateContract, LocalesKeys.common),
    value: ContractTypeEnum.MandateContract,
  },
];

export default ContractTypeOptions;
