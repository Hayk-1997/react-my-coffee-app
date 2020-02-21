import { createAction } from 'redux-actions';

export const AdminRegisterRequest = createAction('ADMIN_REGISTER_REQUEST');
export const GetAdminRegisterSuccess = createAction('GET_ADMIN_REGISTER_SUCCESS');
export const GetAdminRegisterError = createAction('GET_ADMIN_REGISTER_ERROR');