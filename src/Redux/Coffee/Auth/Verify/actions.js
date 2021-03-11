import { createAction } from 'redux-actions';

export const VerifyUserTokenRequest = createAction('VERIFY_USER_TOKEN_REQUEST');
export const VerifyUserTokenSuccess = createAction('VERIFY_USER_TOKEN_SUCCESS');
export const VerifyUserTokenError = createAction('VERIFY_USER_TOKEN_ERROR');