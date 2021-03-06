import { createAction } from 'redux-actions';

export const RegisterRequest = createAction('REGISTER_REQUEST');
export const RegisterSuccess = createAction('REGISTER_SUCCESS');
export const RegisterError = createAction('REGISTER_ERROR');