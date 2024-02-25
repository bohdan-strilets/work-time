import { translateLabel } from 'locales/config';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const MonthOptions = [
  {
    id: 1,
    label: translateLabel(CommonLngKeys.January, LocalesKeys.common),
    value: '1',
  },
  {
    id: 2,
    label: translateLabel(CommonLngKeys.February, LocalesKeys.common),
    value: '2',
  },
  {
    id: 3,
    label: translateLabel(CommonLngKeys.March, LocalesKeys.common),
    value: '3',
  },
  {
    id: 4,
    label: translateLabel(CommonLngKeys.April, LocalesKeys.common),
    value: '4',
  },
  {
    id: 5,
    label: translateLabel(CommonLngKeys.May, LocalesKeys.common),
    value: '5',
  },
  {
    id: 6,
    label: translateLabel(CommonLngKeys.June, LocalesKeys.common),
    value: '6',
  },
  {
    id: 7,
    label: translateLabel(CommonLngKeys.July, LocalesKeys.common),
    value: '7',
  },
  {
    id: 8,
    label: translateLabel(CommonLngKeys.August, LocalesKeys.common),
    value: '8',
  },
  {
    id: 9,
    label: translateLabel(CommonLngKeys.September, LocalesKeys.common),
    value: '9',
  },
  {
    id: 10,
    label: translateLabel(CommonLngKeys.October, LocalesKeys.common),
    value: '10',
  },
  {
    id: 11,
    label: translateLabel(CommonLngKeys.November, LocalesKeys.common),
    value: '11',
  },
  {
    id: 12,
    label: translateLabel(CommonLngKeys.December, LocalesKeys.common),
    value: '12',
  },
];

export default MonthOptions;
