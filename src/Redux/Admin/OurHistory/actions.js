import { createAction } from 'redux-actions';

export const OurHistoryRequest = createAction('OUR_HISTORY_REQUEST');
export const OurHistorySuccess = createAction('OUR_HISTORY_SUCCESS');
export const OurHistoryError = createAction('OUR_HISTORY_ERROR');

export const UpdateOurHistoryRequest = createAction('CREATE_OUR_HISTORY_REQUEST');
export const UpdateOurHistorySuccess = createAction('CREATE_OUR_HISTORY_SUCCESS');
export const UpdateOurHistoryError = createAction('CREATE_OUR_HISTORY_ERROR');

