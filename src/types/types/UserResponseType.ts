import { TokensType } from './TokensType';
import { UserType } from './UserType';

export type UserResponseType<U = UserType, T = TokensType> = {
  status: string;
  code: number;
  success: boolean;
  message?: string;
  tokens?: T;
  data?: U;
};
