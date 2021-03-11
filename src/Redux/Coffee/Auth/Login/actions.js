import { createAction } from 'redux-actions';

export const LoginRequest = createAction('LOGIN_REQUEST');
export const LoginSuccess = createAction('LOGIN_SUCCESS');
export const LoginError = createAction('LOGIN_ERROR');