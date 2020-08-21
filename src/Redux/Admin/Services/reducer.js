import { handleActions } from 'redux-actions';
import {
  ServicesRequest, ServicesSuccess, ServicesError,
  UpdateServicesRequest, UpdateServicesSuccess, UpdateServicesError,
} from './actions';

const initialState = {
  ServicesSuccess: false,
  ServicesData: {},
  ServicesError: false,
  UpdateServicesSuccess: false,
  UpdateServiceSuccessMessage: '',
  UpdateServicesError: false,
  UpdateServicesErrorMessage: '',
};

const reducer = handleActions({
  [ServicesRequest]: (state) =>({
    ...state,
    ServicesSuccess: false,
    ServicesData: {},
    ServicesError: false,
  }),
  [ServicesSuccess]: (state, { payload }) =>({
    ...state,
    ServicesSuccess: true,
    ServicesData: payload.data,
    ServicesError: false,
  }),
  [ServicesError]: (state) =>({
    ...state,
    ServicesSuccess: false,
    ServicesData: {},
    ServicesError: true,
  }),
  [UpdateServicesRequest]: (state) => ({
    ...state,
    UpdateServicesSuccess: false,
    UpdateServiceSuccessMessage: '',
    UpdateServicesError: false,
    UpdateServicesErrorMessage: '',
  }),
  [UpdateServicesSuccess]: (state, { payload }) => ({
    ...state,
    UpdateServicesSuccess: true,
    UpdateServiceSuccessMessage: payload.message,
    UpdateServicesError: false,
    UpdateServicesErrorMessage: '',
  }),
  [UpdateServicesError]: (state, { payload }) => ({
    ...state,
    UpdateServicesSuccess: false,
    UpdateServiceSuccessMessage: '',
    UpdateServicesError: true,
    UpdateServicesErrorMessage: payload.message,
  }),
}, initialState);

export default reducer;