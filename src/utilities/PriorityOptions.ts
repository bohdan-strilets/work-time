import { translateLabel } from 'locales/config';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import PriorityEnum from 'types/enums/PriorityEnum';

export const PriorityOptions = [
  {
    id: 1,
    label: translateLabel(CommonLngKeys.Low, LocalesKeys.common),
    value: PriorityEnum.Low,
  },
  {
    id: 2,
    label: translateLabel(CommonLngKeys.Medium, LocalesKeys.common),
    value: PriorityEnum.Medium,
  },
  {
    id: 3,
    label: translateLabel(CommonLngKeys.High, LocalesKeys.common),
    value: PriorityEnum.High,
  },
];
