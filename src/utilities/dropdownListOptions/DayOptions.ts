import { translateLabel } from 'locales/config';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { Status } from 'types/enums/StatusEnum';

export const DayOptions = [
  {
    id: 1,
    label: translateLabel(CommonLngKeys.WorkDay, LocalesKeys.common),
    value: Status.work,
  },
  {
    id: 2,
    label: translateLabel(CommonLngKeys.DayOff, LocalesKeys.common),
    value: Status.dayOff,
  },
  {
    id: 3,
    label: translateLabel(CommonLngKeys.Vacation, LocalesKeys.common),
    value: Status.vacation,
  },
  {
    id: 4,
    label: translateLabel(CommonLngKeys.SickLeave, LocalesKeys.common),
    value: Status.sickLeave,
  },
];

export const ShortDayOptions = [
  {
    id: 1,
    label: translateLabel(CommonLngKeys.WorkDay, LocalesKeys.common),
    value: Status.work,
  },
  {
    id: 2,
    label: translateLabel(CommonLngKeys.DayOff, LocalesKeys.common),
    value: Status.dayOff,
  },
];
