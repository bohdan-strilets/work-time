import { OptionType } from 'types/types/OptionType';

const FindLabelByValue = (value: string, optionsArr: OptionType[]): string => {
  const { label } = optionsArr.find(item => item.value === value) ?? {};
  return label ?? '';
};

export default FindLabelByValue;
