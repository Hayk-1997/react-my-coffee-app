import { handleActions } from 'redux-actions';

import {
  VerifyUserTokenRequest,
  VerifyUserTokenSuccess,
  VerifyUserTokenError
} from './actions';

const initialState = {
  VerifyUserTokenSuccess: false,
  VerifyUserTokenError: false,
};

const reducer = handleActions({
  [VerifyUserTokenRequest]: (state) => ({
    ...state,
    VerifyUserTokenSuccess: false,
    VerifyUserTokenError: false,
  }),
  [VerifyUserTokenSuccess]: (state) => ({
    ...state,
    VerifyUserTokenSuccess: true,
    VerifyUserTokenError: false,
  }),
  [VerifyUserTokenError]: (state) => ({
    ...state,
    VerifyUserTokenSuccess: false,
    VerifyUserTokenError: true,
  }),

}, initialState);

export default reducer;