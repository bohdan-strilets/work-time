import { RegistrationFormInputs } from './RegistrationFormInputs';

export type ResetPasswordFormInputs = Pick<
  RegistrationFormInputs,
  'email' | 'password' | 'passwordAgain'
>;
