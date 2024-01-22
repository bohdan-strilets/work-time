import { RootState } from 'redux/store';

export const getIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const getIsRefreshing = (state: RootState) => state.user.isRefreshing;
export const getToken = (state: RootState) => state.user.token;
export const getUser = (state: RootState) => state.user.user;
export const getUserId = (state: RootState) => state.user.user?._id;
export const getEmail = (state: RootState) => state.user.user?.email;
export const getFirstName = (state: RootState) => state.user.user?.firstName;
export const getLastName = (state: RootState) => state.user.user?.lastName;
export const getAvatarUrl = (state: RootState) => state.user.user?.avatarUrl;
export const getCompanyInfo = (state: RootState) => state.user.user?.companyInfo;
export const getPassword = (state: RootState) => state.user.user?.password;
export const getSalaryPerHour = (state: RootState) => state.user.user?.companyInfo.salaryPerHour;
export const getAllUsers = (state: RootState) => state.user.usersArr;
export const getCalculationSettings = (state: RootState) => state.user.user?.settings;
export const getContractType = (state: RootState) => state.user.user?.settings.contractType;
export const getAlready26 = (state: RootState) => state.user.user?.settings.areYouAlready26Years;
export const getPpk = (state: RootState) => state.user.user?.settings.ppk;
