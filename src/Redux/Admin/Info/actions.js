import { createAction } from 'redux-actions';

export const Admin_InfoRequest = createAction('ADMIN_INFO_REQUEST');
export const Admin_InfoSuccess = createAction('ADMIN_INFO_SUCCESS');
export const Admin_InfoError = createAction('ADMIN_INFO_ERROR');