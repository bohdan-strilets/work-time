import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import api from 'api';
import { UserResponseType } from 'types/types/UserResponseType';
import { RegistrationDto } from 'types/dto/RegistrationDto';
import { UserType } from 'types/types/UserType';
import { TokensType } from 'types/types/TokensType';
import { ENTITY_NAME, OPERATION_NAME, ENDPOINTS_PATH } from './config';
import { LoginDto } from 'types/dto/LoginDto';
import { ChangeProfileDto } from 'types/dto/ChangeProfileDto';
import { EmailDto } from 'types/dto/EmailDto';
import { ChangePasswordDto } from 'types/dto/ChangePasswordDto';
import { ResetPasswordDto } from 'types/dto/resetPasswordDto';

const registration = createAsyncThunk<
  UserResponseType<UserType, TokensType> | undefined,
  RegistrationDto
>(`${ENTITY_NAME}/${OPERATION_NAME.Registration}`, async registrationDto => {
  try {
    const { data } = await api.post(ENDPOINTS_PATH.Registration, registrationDto);
    if (data) {
      const response = data as UserResponseType<UserType, TokensType>;
      return response;
    }
    return undefined;
  } catch (error: any) {
    if (error.response) {
      const err = error.response.data as UserResponseType;
      toast.error(`${err.code} - ${err.message}`);
    } else if (error.request) {
      const err = error as AxiosError;
      toast.error(err.message);
    } else {
      const err = error as AxiosError;
      toast.error(err.message);
    }
  }
});

const googleAuth = createAsyncThunk<UserResponseType<UserType, TokensType> | undefined, string>(
  `${ENTITY_NAME}/${OPERATION_NAME.GoogleAuth}`,
  async token => {
    try {
      const { data } = await api.post(ENDPOINTS_PATH.GoogleAuth, { token });
      if (data) {
        const response = data as UserResponseType<UserType, TokensType>;
        return response;
      }
      return undefined;
    } catch (error: any) {
      if (error.response) {
        const err = error.response.data as UserResponseType;
        toast.error(`${err.code} - ${err.message}`);
      } else if (error.request) {
        const err = error as AxiosError;
        toast.error(err.message);
      } else {
        const err = error as AxiosError;
        toast.error(err.message);
      }
    }
  },
);
const logout = createAsyncThunk<UserResponseType | undefined>(
  `${ENTITY_NAME}/${OPERATION_NAME.Logout}`,
  async () => {
    try {
      const { data } = await api.get(ENDPOINTS_PATH.Logout);
      if (data) {
        const response = data as UserResponseType;
        return response;
      }
      return undefined;
    } catch (error: any) {
      if (error.response) {
        const err = error.response.data as UserResponseType;
        toast.error(`${err.code} - ${err.message}`);
      } else if (error.request) {
        const err = error as AxiosError;
        toast.error(err.message);
      } else {
        const err = error as AxiosError;
        toast.error(err.message);
      }
    }
  },
);

const login = createAsyncThunk<UserResponseType<UserType, TokensType> | undefined, LoginDto>(
  `${ENTITY_NAME}/${OPERATION_NAME.Login}`,
  async loginDto => {
    try {
      const { data } = await api.post(ENDPOINTS_PATH.Login, loginDto);
      if (data) {
        const response = data as UserResponseType<UserType, TokensType>;
        return response;
      }
      return undefined;
    } catch (error: any) {
      if (error.response) {
        const err = error.response.data as UserResponseType;
        toast.error(`${err.code} - ${err.message}`);
      } else if (error.request) {
        const err = error as AxiosError;
        toast.error(err.message);
      } else {
        const err = error as AxiosError;
        toast.error(err.message);
      }
    }
  },
);

const refreshUser = createAsyncThunk<UserResponseType<TokensType> | undefined>(
  `${ENTITY_NAME}/${OPERATION_NAME.Refresh}`,
  async () => {
    try {
      const { data } = await api.get(ENDPOINTS_PATH.Refresh);
      if (data) {
        const response = data as UserResponseType<TokensType>;
        return response;
      }
      return undefined;
    } catch (error: any) {
      if (error.response) {
        const err = error.response.data as UserResponseType;
        toast.error(`${err.code} - ${err.message}`);
      } else if (error.request) {
        const err = error as AxiosError;
        toast.error(err.message);
      } else {
        const err = error as AxiosError;
        toast.error(err.message);
      }
    }
  },
);

const changeProfile = createAsyncThunk<UserResponseType<UserType> | undefined, ChangeProfileDto>(
  `${ENTITY_NAME}/${OPERATION_NAME.ChangeProfile}`,
  async changeProfileDto => {
    try {
      const { data } = await api.put(ENDPOINTS_PATH.ChangeProfile, changeProfileDto);
      if (data) {
        const response = data as UserResponseType<UserType>;
        return response;
      }
      return undefined;
    } catch (error: any) {
      if (error.response) {
        const err = error.response.data as UserResponseType;
        toast.error(`${err.code} - ${err.message}`);
      } else if (error.request) {
        const err = error as AxiosError;
        toast.error(err.message);
      } else {
        const err = error as AxiosError;
        toast.error(err.message);
      }
    }
  },
);

const uploadAvatar = createAsyncThunk<UserResponseType<UserType> | undefined, FormData>(
  `${ENTITY_NAME}/${OPERATION_NAME.UploadAvatar}`,
  async avatar => {
    try {
      const { data } = await api.post(ENDPOINTS_PATH.UploadAvatar, avatar);
      if (data) {
        const response = data as UserResponseType;
        toast.success('The avatar has been successfully changed.');
        return response;
      }
    } catch (error: any) {
      if (error.response) {
        const err = error.response.data as UserResponseType;
        toast.error(`${err.code} - ${err.message}`);
      } else if (error.request) {
        const err = error as AxiosError;
        toast.error(err.message);
      } else {
        const err = error as AxiosError;
        toast.error(err.message);
      }
    }
  },
);

const changeEmail = createAsyncThunk<UserResponseType | undefined, EmailDto>(
  `${ENTITY_NAME}/${OPERATION_NAME.ChangedEmail}`,
  async emailDto => {
    try {
      const { data } = await api.patch(ENDPOINTS_PATH.ChangedEmail, emailDto);
      if (data) {
        const response = data as UserResponseType;
        return response;
      }
    } catch (error: any) {
      if (error.response) {
        const err = error.response.data as UserResponseType;
        toast.error(`${err.code} - ${err.message}`);
      } else if (error.request) {
        const err = error as AxiosError;
        toast.error(err.message);
      } else {
        const err = error as AxiosError;
        toast.error(err.message);
      }
    }
  },
);

const changePassword = createAsyncThunk<UserResponseType | undefined, ChangePasswordDto>(
  `${ENTITY_NAME}/${OPERATION_NAME.ChangedPassword}`,
  async changePasswordDto => {
    try {
      const { data } = await api.patch(ENDPOINTS_PATH.ChangedPassword, changePasswordDto);
      if (data) {
        const response = data as UserResponseType;
        return response;
      }
    } catch (error: any) {
      if (error.response) {
        const err = error.response.data as UserResponseType;
        toast.error(`${err.code} - ${err.message}`);
      } else if (error.request) {
        const err = error as AxiosError;
        toast.error(err.message);
      } else {
        const err = error as AxiosError;
        toast.error(err.message);
      }
    }
  },
);

const requestResetPassword = createAsyncThunk<UserResponseType | undefined, EmailDto>(
  `${ENTITY_NAME}/${OPERATION_NAME.RequestResetPassword}`,
  async emailDto => {
    try {
      const { data } = await api.post(ENDPOINTS_PATH.RequestResetPassword, emailDto);
      if (data) {
        const response = data as UserResponseType;
        return response;
      }
      return undefined;
    } catch (error: any) {
      if (error.response) {
        const err = error.response.data as UserResponseType;
        toast.error(`${err.code} - ${err.message}`);
      } else if (error.request) {
        const err = error as AxiosError;
        toast.error(err.message);
      } else {
        const err = error as AxiosError;
        toast.error(err.message);
      }
    }
  },
);

const resetPassword = createAsyncThunk<UserResponseType | undefined, ResetPasswordDto>(
  `${ENTITY_NAME}/${OPERATION_NAME.ResetPassword}`,
  async resetPasswordDto => {
    try {
      const { data } = await api.post(ENDPOINTS_PATH.ResetPassword, resetPasswordDto);
      if (data) {
        const response = data as UserResponseType;
        return response;
      }
      return undefined;
    } catch (error: any) {
      if (error.response) {
        const err = error.response.data as UserResponseType;
        toast.error(`${err.code} - ${err.message}`);
      } else if (error.request) {
        const err = error as AxiosError;
        toast.error(err.message);
      } else {
        const err = error as AxiosError;
        toast.error(err.message);
      }
    }
  },
);

const repeatConfirmEmail = createAsyncThunk<UserResponseType | undefined, EmailDto>(
  `${ENTITY_NAME}/${OPERATION_NAME.RepeatConfirmEmail}`,
  async emailDto => {
    try {
      const { data } = await api.post(ENDPOINTS_PATH.RepeatConfirmEmail, emailDto);
      if (data) {
        const response = data as UserResponseType;
        return response;
      }
      return undefined;
    } catch (error: any) {
      if (error.response) {
        const err = error.response.data as UserResponseType;
        toast.error(`${err.code} - ${err.message}`);
      } else if (error.request) {
        const err = error as AxiosError;
        toast.error(err.message);
      } else {
        const err = error as AxiosError;
        toast.error(err.message);
      }
    }
  },
);

const deleteProfile = createAsyncThunk<UserResponseType | undefined>(
  `${ENTITY_NAME}/${OPERATION_NAME.DeleteProfile}`,
  async () => {
    try {
      const { data } = await api.delete(ENDPOINTS_PATH.DeleteProfile);
      if (data) {
        const response = data as UserResponseType;
        return response;
      }
    } catch (error: any) {
      if (error.response) {
        const err = error.response.data as UserResponseType;
        toast.error(`${err.code} - ${err.message}`);
      } else if (error.request) {
        const err = error as AxiosError;
        toast.error(err.message);
      } else {
        const err = error as AxiosError;
        toast.error(err.message);
      }
    }
  },
);

const currentUser = createAsyncThunk<UserResponseType<UserType> | undefined>(
  `${ENTITY_NAME}/${OPERATION_NAME.CurrentUser}`,
  async () => {
    try {
      const { data } = await api.get(ENDPOINTS_PATH.CurrentUser);
      if (data) {
        const response = data as UserResponseType<UserType>;
        return response;
      }
      return undefined;
    } catch (error: any) {
      if (error.response) {
        const err = error.response.data as UserResponseType;
        toast.error(`${err.code} - ${err.message}`);
      } else if (error.request) {
        const err = error as AxiosError;
        toast.error(err.message);
      } else {
        const err = error as AxiosError;
        toast.error(err.message);
      }
    }
  },
);

const operations = {
  registration,
  googleAuth,
  logout,
  login,
  refreshUser,
  changeProfile,
  uploadAvatar,
  changeEmail,
  changePassword,
  requestResetPassword,
  resetPassword,
  repeatConfirmEmail,
  deleteProfile,
  currentUser,
};

export default operations;
