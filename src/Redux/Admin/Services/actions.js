import { createAction } from 'redux-actions';

export const ServicesRequest = createAction('SERVICES_REQUEST');
export const ServicesSuccess = createAction('SERVICES_SUCCESS');
export const ServicesError = createAction('SERVICES_ERROR');

export const UpdateServicesRequest = createAction('UPDATE_SERVICES_REQUEST');
export const UpdateServicesSuccess = createAction('UPDATE_SERVICES_SUCCESS');
export const UpdateServicesError = createAction('UPDATE_SERVICES_ERROR');