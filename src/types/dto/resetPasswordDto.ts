import { RegistrationDto } from './RegistrationDto';

export type ResetPasswordDto = Pick<RegistrationDto, 'password' | 'email'>;
