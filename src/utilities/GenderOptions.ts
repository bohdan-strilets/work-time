import { Gender } from 'types/enums/GenderEnum';
import { translateLabel } from 'locales/config';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const GenderOptions = [
  {
    id: 1,
    label: translateLabel(CommonLngKeys.Other, LocalesKeys.common),
    value: Gender.Other,
  },
  {
    id: 2,
    label: translateLabel(CommonLngKeys.Man, LocalesKeys.common),
    value: Gender.Man,
  },
  {
    id: 3,
    label: translateLabel(CommonLngKeys.Woman, LocalesKeys.common),
    value: Gender.Woman,
  },
];

export default GenderOptions;
