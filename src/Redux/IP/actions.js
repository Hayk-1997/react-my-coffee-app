import { createAction } from 'redux-actions';

export const IPRequest = createAction('IP_REQUEST');
export const IPSuccess = createAction('IP_SUCCESS');
export const IPError = createAction('IP_ERROR');