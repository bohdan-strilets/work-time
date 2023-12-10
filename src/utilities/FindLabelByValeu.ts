import { OptionType } from 'types/types/OptionType';

const FindLabelByValeu = (value: string, optionsArr: OptionType[]): string => {
  const option = optionsArr.find(item => item.value === value);
  const label = option?.label;
  if (label) return label;
  return '';
};

export default FindLabelByValeu;
