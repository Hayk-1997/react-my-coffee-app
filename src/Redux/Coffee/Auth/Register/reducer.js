import { handleActions } from 'redux-actions';
import {
  RegisterRequest,
  RegisterSuccess,
  RegisterError,
} from './actions';

const initialState = {
  RegisterSuccess: false,
  RegisterSuccessData: {},
  RegisterError: false,
  RegisterErrorMessage: '',
};

const reducer = handleActions({
  [RegisterRequest]: (state) => ({
    ...state,
    RegisterSuccess: false,
    RegisterSuccessData: {},
    RegisterError: false,
    RegisterErrorMessage: '',
  }),
  [RegisterSuccess]: (state, { payload }) => ({
    ...state,
    RegisterSuccess: true,
    RegisterSuccessData: payload,
    RegisterError: false,
    RegisterErrorMessage: '',
  }),
  [RegisterError]: (state, { payload }) => ({
    ...state,
    RegisterSuccess: false,
    RegisterSuccessData: {},
    RegisterError: true,
    RegisterErrorMessage: payload,
  }),
}, initialState );

export default reducer;