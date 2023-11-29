import { OptionType } from 'types/types/OptionType';

export type DropdownListProps = {
  name: string;
  options: OptionType[];
  label?: string;
  buttonlabel: string;
  defaultValue?: string | string[] | null;
  required?: boolean;
  disabled?: boolean;
  width?: string;
  height?: string;
  margin?: string;
  onChange: (value: string | string[]) => void;
  errors?: any;
  type: 'single' | 'multiselect';
  position?: 'relative' | 'absolute';
};

export type UseDropdownListData = Pick<
  DropdownListProps,
  'options' | 'onChange' | 'defaultValue' | 'type'
>;

export type WrapperProps = Pick<DropdownListProps, 'width' | 'margin'>;

export type ButtonProps = Pick<DropdownListProps, 'height' | 'disabled'>;

export type ListProps = Pick<DropdownListProps, 'position'>;
