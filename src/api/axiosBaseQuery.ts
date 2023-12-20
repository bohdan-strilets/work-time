import type { AxiosRequestConfig, AxiosError } from 'axios';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import api, { API_URL } from 'api';

const axiosBaseQuery =
  (
    endpointName: string,
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      headers?: AxiosRequestConfig['headers'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await api({
        url: `${API_URL}api/v1/${endpointName}/${url}`,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return { error: { status: err.response?.status, data: err.response?.data || err.message } };
    }
  };

export default axiosBaseQuery;
