import { translateLabel } from 'locales/config';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const DayOptions = [
  {
    id: 1,
    label: translateLabel(CommonLngKeys.WorkDay, LocalesKeys.common),
    value: 'work',
  },
  {
    id: 2,
    label: translateLabel(CommonLngKeys.DayOff, LocalesKeys.common),
    value: 'day-off',
  },
  {
    id: 3,
    label: translateLabel(CommonLngKeys.Vacation, LocalesKeys.common),
    value: 'vacation',
  },
  {
    id: 4,
    label: translateLabel(CommonLngKeys.SickLeave, LocalesKeys.common),
    value: 'sick-leave',
  },
];

export default DayOptions;
