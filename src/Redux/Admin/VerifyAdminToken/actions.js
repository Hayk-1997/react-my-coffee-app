import { createAction } from 'redux-actions';

export const AdminTokenVerifyRequest = createAction('ADMIN_TOKEN_VERIFY_REQUEST');
export const GetAdminTokenVerifySuccess = createAction('GET_ADMIN_TOKEN_VERIFY_SUCCESS');
export const GetAdminTokenVerifyError = createAction('GET_ADMIN_TOKEN_VERIFY_ERROR');