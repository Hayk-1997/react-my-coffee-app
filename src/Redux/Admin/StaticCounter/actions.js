import { createAction } from 'redux-actions';

export const StaticCounterRequest = createAction('STATIC_COUNTER_REQUEST');
export const StaticCounterSuccess = createAction('STATIC_COUNTER_SUCCESS');
export const StaticCounterError = createAction('STATIC_COUNTER_ERROR');
