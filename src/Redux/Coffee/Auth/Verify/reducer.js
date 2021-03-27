import { handleActions } from 'redux-actions';

import {
  VerifyUserTokenRequest,
  VerifyUserTokenSuccess,
  VerifyUserTokenError
} from './actions';

const initialState = {
  VerifyUserTokenSuccess: false,
  userId: '',
  VerifyUserTokenError: false,
};

const reducer = handleActions({
  [VerifyUserTokenRequest]: (state) => ({
    ...state,
    VerifyUserTokenSuccess: false,
    userId: '',
    VerifyUserTokenError: false,
  }),
  [VerifyUserTokenSuccess]: (state, { payload }) => ({
    ...state,
    VerifyUserTokenSuccess: true,
    userId: payload,
    VerifyUserTokenError: false,
  }),
  [VerifyUserTokenError]: (state) => ({
    ...state,
    VerifyUserTokenSuccess: false,
    userId: '',
    VerifyUserTokenError: true,
  }),

}, initialState);

export default reducer;