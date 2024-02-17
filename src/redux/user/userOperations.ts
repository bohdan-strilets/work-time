import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
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
import CustomErrorHandler from 'utilities/CustomErrorHandler';
import { translateLabel } from 'locales/config';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { ChangeSettingsDto } from 'types/dto/ChangeSettingsDto';
import { ContactEmailDto } from 'types/dto/ContactEmailDto';
import { ProfileLngKeys } from 'types/locales/ProfileLngKeys';

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
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<UserResponseType>;
      if (axiosError.response) {
        const serverError = axiosError.response.data as UserResponseType;
        CustomErrorHandler(serverError);
      } else {
        toast.error(translateLabel(ErrorLngKeys.GeneralAxiosError, LocalesKeys.error));
      }
    } else {
      toast.error(translateLabel(ErrorLngKeys.GeneralError, LocalesKeys.error));
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
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<UserResponseType>;
        if (axiosError.response) {
          const serverError = axiosError.response.data as UserResponseType;
          CustomErrorHandler(serverError);
        } else {
          toast.error(translateLabel(ErrorLngKeys.GeneralAxiosError, LocalesKeys.error));
        }
      } else {
        toast.error(translateLabel(ErrorLngKeys.GeneralError, LocalesKeys.error));
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
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<UserResponseType>;
        if (axiosError.response) {
          const serverError = axiosError.response.data as UserResponseType;
          CustomErrorHandler(serverError);
        } else {
          toast.error(translateLabel(ErrorLngKeys.GeneralAxiosError, LocalesKeys.error));
        }
      } else {
        toast.error(translateLabel(ErrorLngKeys.GeneralError, LocalesKeys.error));
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
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<UserResponseType>;
        if (axiosError.response) {
          const serverError = axiosError.response.data as UserResponseType;
          CustomErrorHandler(serverError);
        } else {
          toast.error(translateLabel(ErrorLngKeys.GeneralAxiosError, LocalesKeys.error));
        }
      } else {
        toast.error(translateLabel(ErrorLngKeys.GeneralError, LocalesKeys.error));
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
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<UserResponseType>;
        if (axiosError.response) {
          const serverError = axiosError.response.data as UserResponseType;
          CustomErrorHandler(serverError);
        } else {
          toast.error(translateLabel(ErrorLngKeys.GeneralAxiosError, LocalesKeys.error));
        }
      } else {
        toast.error(translateLabel(ErrorLngKeys.GeneralError, LocalesKeys.error));
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
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<UserResponseType>;
        if (axiosError.response) {
          const serverError = axiosError.response.data as UserResponseType;
          CustomErrorHandler(serverError);
        } else {
          toast.error(translateLabel(ErrorLngKeys.GeneralAxiosError, LocalesKeys.error));
        }
      } else {
        toast.error(translateLabel(ErrorLngKeys.GeneralError, LocalesKeys.error));
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
        toast.success(
          translateLabel(ProfileLngKeys.AvatarHasBeenSuccessfullyChanged, LocalesKeys.profile),
        );
        return response;
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<UserResponseType>;
        if (axiosError.response) {
          const serverError = axiosError.response.data as UserResponseType;
          CustomErrorHandler(serverError);
        } else {
          toast.error(translateLabel(ErrorLngKeys.GeneralAxiosError, LocalesKeys.error));
        }
      } else {
        toast.error(translateLabel(ErrorLngKeys.GeneralError, LocalesKeys.error));
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
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<UserResponseType>;
        if (axiosError.response) {
          const serverError = axiosError.response.data as UserResponseType;
          CustomErrorHandler(serverError);
        } else {
          toast.error(translateLabel(ErrorLngKeys.GeneralAxiosError, LocalesKeys.error));
        }
      } else {
        toast.error(translateLabel(ErrorLngKeys.GeneralError, LocalesKeys.error));
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
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<UserResponseType>;
        if (axiosError.response) {
          const serverError = axiosError.response.data as UserResponseType;
          CustomErrorHandler(serverError);
        } else {
          toast.error(translateLabel(ErrorLngKeys.GeneralAxiosError, LocalesKeys.error));
        }
      } else {
        toast.error(translateLabel(ErrorLngKeys.GeneralError, LocalesKeys.error));
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
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<UserResponseType>;
        if (axiosError.response) {
          const serverError = axiosError.response.data as UserResponseType;
          CustomErrorHandler(serverError);
        } else {
          toast.error(translateLabel(ErrorLngKeys.GeneralAxiosError, LocalesKeys.error));
        }
      } else {
        toast.error(translateLabel(ErrorLngKeys.GeneralError, LocalesKeys.error));
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
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<UserResponseType>;
        if (axiosError.response) {
          const serverError = axiosError.response.data as UserResponseType;
          CustomErrorHandler(serverError);
        } else {
          toast.error(translateLabel(ErrorLngKeys.GeneralAxiosError, LocalesKeys.error));
        }
      } else {
        toast.error(translateLabel(ErrorLngKeys.GeneralError, LocalesKeys.error));
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
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<UserResponseType>;
        if (axiosError.response) {
          const serverError = axiosError.response.data as UserResponseType;
          CustomErrorHandler(serverError);
        } else {
          toast.error(translateLabel(ErrorLngKeys.GeneralAxiosError, LocalesKeys.error));
        }
      } else {
        toast.error(translateLabel(ErrorLngKeys.GeneralError, LocalesKeys.error));
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
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<UserResponseType>;
        if (axiosError.response) {
          const serverError = axiosError.response.data as UserResponseType;
          CustomErrorHandler(serverError);
        } else {
          toast.error(translateLabel(ErrorLngKeys.GeneralAxiosError, LocalesKeys.error));
        }
      } else {
        toast.error(translateLabel(ErrorLngKeys.GeneralError, LocalesKeys.error));
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
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<UserResponseType>;
        if (axiosError.response) {
          const serverError = axiosError.response.data as UserResponseType;
          CustomErrorHandler(serverError);
        } else {
          toast.error(translateLabel(ErrorLngKeys.GeneralAxiosError, LocalesKeys.error));
        }
      } else {
        toast.error(translateLabel(ErrorLngKeys.GeneralError, LocalesKeys.error));
      }
    }
  },
);

const getAllUsers = createAsyncThunk<UserResponseType<UserType[]> | undefined>(
  `${ENTITY_NAME}/${OPERATION_NAME.GetAllUsers}`,
  async () => {
    try {
      const { data } = await api.get(ENDPOINTS_PATH.GetAllUsers);
      if (data) {
        const response = data as UserResponseType<UserType[]>;
        return response;
      }
      return undefined;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<UserResponseType>;
        if (axiosError.response) {
          const serverError = axiosError.response.data as UserResponseType;
          CustomErrorHandler(serverError);
        } else {
          toast.error(translateLabel(ErrorLngKeys.GeneralAxiosError, LocalesKeys.error));
        }
      } else {
        toast.error(translateLabel(ErrorLngKeys.GeneralError, LocalesKeys.error));
      }
    }
  },
);

const changeSettings = createAsyncThunk<UserResponseType<UserType> | undefined, ChangeSettingsDto>(
  `${ENTITY_NAME}/${OPERATION_NAME.ChangeSettings}`,
  async changeSettingsDto => {
    try {
      const { data } = await api.put(ENDPOINTS_PATH.ChangeSettings, changeSettingsDto);
      if (data) {
        const response = data as UserResponseType<UserType>;
        return response;
      }
      return undefined;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<UserResponseType>;
        if (axiosError.response) {
          const serverError = axiosError.response.data as UserResponseType;
          CustomErrorHandler(serverError);
        } else {
          toast.error(translateLabel(ErrorLngKeys.GeneralAxiosError, LocalesKeys.error));
        }
      } else {
        toast.error(translateLabel(ErrorLngKeys.GeneralError, LocalesKeys.error));
      }
    }
  },
);

const sendContactEmail = createAsyncThunk<UserResponseType | undefined, ContactEmailDto>(
  `${ENTITY_NAME}/${OPERATION_NAME.SendContactEmail}`,
  async contactEmailDto => {
    try {
      const { data } = await api.post(ENDPOINTS_PATH.SendContactEmail, contactEmailDto);
      if (data) {
        const response = data as UserResponseType;
        return response;
      }
      return undefined;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<UserResponseType>;
        if (axiosError.response) {
          const serverError = axiosError.response.data as UserResponseType;
          CustomErrorHandler(serverError);
        } else {
          toast.error(translateLabel(ErrorLngKeys.GeneralAxiosError, LocalesKeys.error));
        }
      } else {
        toast.error(translateLabel(ErrorLngKeys.GeneralError, LocalesKeys.error));
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
  getAllUsers,
  changeSettings,
  sendContactEmail,
};

export default operations;
