import { createAction } from 'redux-actions'

export const AdminLoginRequest = createAction('ADMIN_LOGIN_REQUEST');
export const GetAdminLoginSuccess = createAction('GET_ADMIN_LOGIN_SUCCESS');
export const GetAdminLoginError = createAction('GET_ADMIN_LOGIN_ERROR');
