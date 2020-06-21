import { createAction } from 'redux-actions';

export const Admin_InfoRequest = createAction('ADMIN_INFO_REQUEST');
export const Admin_InfoSuccess = createAction('ADMIN_INFO_SUCCESS');
export const Admin_InfoError = createAction('ADMIN_INFO_ERROR');
export const Admin_UpdateInfoRequest = createAction('ADMIN_UPDATE_INFO_REQUEST');
export const Admin_UpdateInfoSuccess = createAction('ADMIN_UPDATE_INFO_SUCCESS');
export const Admin_UpdateInfoError = createAction('ADMIN_UPDATE_INFO_ERROR');