import { RegistrationDto } from './RegistrationDto';

export type LoginDto = Pick<RegistrationDto, 'email' | 'password'>;
