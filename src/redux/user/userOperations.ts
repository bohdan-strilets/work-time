import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import api from 'api';
import { UserResponseType } from 'types/types/UserResponseType';
import { RegistrationDto } from 'types/dto/RegistrationDto';
import { UserType } from 'types/types/UserType';
import { TokensType } from 'types/types/TokensType';
import { ENTITY_NAME, OPERATION_NAME, ENDPOINTS_PATH } from './config';

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

const operations = {
  registration,
  googleAuth,
  logout,
};

export default operations;
