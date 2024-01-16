export type TextareaProps = {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  register: any;
  errors: any;
  width?: number;
  height?: number;
  margin?: string;
  defaultValue?: string;
};

export type WrapperProps = Pick<TextareaProps, 'width' | 'margin' | 'disabled'>;

export type InputProps = Pick<TextareaProps, 'height'>;
