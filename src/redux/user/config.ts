export const ENTITY_NAME = 'user';

export const OPERATION_NAME = {
  Registration: 'registration',
  GoogleAuth: 'google-auth',
  Logout: 'logout',
  Login: 'login',
  Refresh: 'refresh',
  ChangeProfile: 'change-profile',
  UploadAvatar: 'upload-avatar',
  ChangedEmail: 'change-email',
  ChangedPassword: 'change-password',
  RequestResetPassword: 'request-reset-password',
  ResetPassword: 'reset-password',
};

export const ENDPOINTS_PATH = {
  Registration: 'api/v1/auth/registration',
  GoogleAuth: 'api/v1/auth/google-auth',
  Logout: 'api/v1/auth/logout',
  Login: 'api/v1/auth/login',
  Refresh: 'api/v1/users/current-user',
  ChangeProfile: 'api/v1/users/change-profile',
  UploadAvatar: 'api/v1/users/upload-avatar',
  ChangedEmail: 'api/v1/users/change-email',
  ChangedPassword: 'api/v1/users/change-password',
  RequestResetPassword: 'api/v1/users/request-reset-password',
  ResetPassword: 'api/v1/users/reset-password',
};
