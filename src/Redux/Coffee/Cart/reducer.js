import { handleActions } from 'redux-actions';
import {
  CartRequest,
  CartSuccess,
  CartError
} from './actions';

const initialState = {
  CartRequestSuccess: false,
  CartData: [],
  CartRequestError: false,
};

const reducer = handleActions({
  [CartRequest]: () => ({
    CartRequestSuccess: false,
    CartData: [],
    CartRequestError: false,
  }),
  [CartSuccess]: ({ payload }) => ({
    CartRequestSuccess: true,
    CartData: payload,
    CartRequestError: false,
  }),
  [CartError]: () => ({
    CartRequestSuccess: false,
    CartData: [],
    CartRequestError: true,
  }),
}, initialState);

export default reducer;