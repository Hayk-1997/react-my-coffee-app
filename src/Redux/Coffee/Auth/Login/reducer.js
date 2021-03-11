import { handleActions } from 'redux-actions';

import {
  LoginRequest,
  LoginSuccess,
  LoginError
} from './actions';


const initialState = {
  LoginSuccess: false,
  LoginSuccessData: {},
  LoginError: false,
  LoginErrorMessage: '',
};

const reducer = handleActions({
  [LoginRequest]: (state) => ({
    ...state,
    LoginSuccess: false,
    LoginSuccessData: {},
    LoginError: false,
    LoginErrorMessage: '',
  }),
  [LoginSuccess]: (state, { payload }) => ({
    ...state,
    LoginSuccess: true,
    LoginSuccessData: payload,
    LoginError: false,
    LoginErrorMessage: '',
  }),
  [LoginError]: (state, { payload }) => ({
    ...state,
    LoginSuccess: false,
    LoginSuccessData: {},
    LoginError: true,
    LoginErrorMessage: payload,
  }),

}, initialState);

export default reducer;