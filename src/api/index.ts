import axios from 'axios';

export const API_URL = 'https://work-time-api.vercel.app/';

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use(config => {
  const token = JSON.parse(localStorage.getItem('persist:user') as string);
  if (token) {
    const parsedToken = token.token.replaceAll('"', '');
    config.headers.Authorization = `Bearer ${parsedToken}`;
  }
  return config;
});

let refreshAttempts = 0;

api.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry &&
      refreshAttempts < 2
    ) {
      refreshAttempts += 1;
      const originalRequest = error.config;
      originalRequest._isRetry = true;
      try {
        const { data } = await api.get('api/v1/users/refresh-user');
        const dataToLS = {
          token: data.tokens.accessToken,
          _persist: '{"version":-1,"rehydrated":true}',
        };

        localStorage.setItem('persist:user', JSON.stringify(dataToLS));
        refreshAttempts = 0;
        return api.request(originalRequest);
      } catch (error) {}
    }

    throw error;
  },
);

export default api;
