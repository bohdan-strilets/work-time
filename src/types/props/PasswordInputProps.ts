import { TextInputProps } from './TextInputProps';

export type PasswordInputProps = Pick<
  TextInputProps,
  | 'label'
  | 'icon'
  | 'name'
  | 'placeholder'
  | 'required'
  | 'disabled'
  | 'register'
  | 'errors'
  | 'width'
  | 'height'
  | 'margin'
>;
