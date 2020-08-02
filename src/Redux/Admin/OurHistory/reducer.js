import { handleActions } from 'redux-actions';
import {
  OurHistoryRequest, OurHistorySuccess, OurHistoryError,
  UpdateOurHistoryRequest, UpdateOurHistorySuccess, UpdateOurHistoryError
} from './actions';

const initialState = {
  OurHistorySuccess: false,
  OurHistoryData: {},  
  OurHistoryError: false,
  UpdateOurHistorySuccess: false,
  UpdateOurHistoryError: false,
};

const reducer = handleActions(
  {
    [UpdateOurHistoryRequest]: (state) => ({
      ...state,
      UpdateOurHistorySuccess: false,
      UpdateOurHistoryError: false,
    }),
    [UpdateOurHistorySuccess]: (state) => ({
      ...state,
      UpdateOurHistorySuccess: true,
      UpdateOurHistoryError: false,
    }),
    [UpdateOurHistoryError]: (state) => ({
      ...state,
      UpdateOurHistorySuccess: true,
      UpdateOurHistoryError: false,
    }),
    [OurHistoryRequest]: (state) => ({
      ...state,
      OurHistorySuccess: false,
      OurHistoryData: {},
      OurHistoryError: false,
    }),
    [OurHistorySuccess]: (state, { payload }) => ({
      ...state,
      OurHistorySuccess: true,
      OurHistoryData: payload.data,
      OurHistoryError: false,
    }),
    [OurHistoryError]: (state) => ({
      ...state,
      OurHistorySuccess: false,
      OurHistoryData: {},
      OurHistoryError: true,
    }),
  },
  initialState
);

export default reducer;