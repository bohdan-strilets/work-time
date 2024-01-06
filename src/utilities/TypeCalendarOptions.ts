import { translateLabel } from 'locales/config';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const TypeCalendarOptions = [
  {
    id: 1,
    label: translateLabel(CommonLngKeys.Calendar, LocalesKeys.common),
    value: 'calendar',
  },
  {
    id: 2,
    label: translateLabel(CommonLngKeys.List, LocalesKeys.common),
    value: 'list',
  },
];

export default TypeCalendarOptions;
