export type TextInputProps = {
  type: 'text' | 'tel' | 'email' | 'password';
  label?: string;
  icon?: React.ReactNode;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  register: any;
  errors: any;
  width?: number;
  height?: number;
  margin?: string;
  children?: React.ReactNode;
};

export type WrapperProps = Pick<TextInputProps, 'width' | 'margin' | 'disabled'>;

export type InputProps = Pick<TextInputProps, 'height'>;
