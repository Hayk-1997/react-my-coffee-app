import { handleActions } from 'redux-actions';
import {
  StaticCounterRequest, StaticCounterSuccess, StaticCounterError
} from './actions';

const initialState = {
  StaticCounterSuccess: false,
  StaticCounterData: {},
  StaticCounterError: false,
};
const reducer = handleActions({
  [StaticCounterRequest]: (state) => ({
    ...state,
    StaticCounterSuccess: false,
    StaticCounterData: {},
    StaticCounterError: false,
  }),
  [StaticCounterSuccess]: (state, { payload }) => ({
    ...state,
    StaticCounterSuccess: true,
    StaticCounterData: payload.data,
    StaticCounterError: false,
  }),
  [StaticCounterError]: (state) => ({
    ...state,
    StaticCounterSuccess: false,
    StaticCounterData: {},
    StaticCounterError: false,
  }),
}, initialState);

export default reducer;