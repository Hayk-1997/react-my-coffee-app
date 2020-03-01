import { createAction } from 'redux-actions';

export const GetAdminRequest = createAction('GET_TOKEN_REQUEST');
export const GetAdminSuccess = createAction('GET_TOKEN_SUCCESS');
export const GetAdminError = createAction('GET_TOKEN_ERROR');