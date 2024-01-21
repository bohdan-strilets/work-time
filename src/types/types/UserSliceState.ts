import { UserType } from './UserType';

export type UserSliceState = {
  user: UserType | null;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  usersArr: UserType[] | null;
};
