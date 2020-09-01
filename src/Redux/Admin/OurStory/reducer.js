import { handleActions } from 'redux-actions';
import {
  OurStoryRequest, OurStorySuccess, OurStoryError,
  UpdateOurStoryRequest, UpdateOurStorySuccess, UpdateOurStoryError
} from './actions';

const initialState = {
  OurStorySuccess: false,
  OurStoryData: {},
  OurStoryError: false,
  UpdateOurStorySuccess: false,
  UpdateOurStorySuccessMessage: '',
  UpdateOurStoryError: false,
  UpdateOurStoryErrorMessage: '',
};

const reducer = handleActions(
  {
    [UpdateOurStoryRequest]: (state) => ({
      ...state,
      UpdateOurStorySuccess: false,
      UpdateOurStorySuccessMessage: '',
      UpdateOurStoryError: false,
      UpdateOurStoryErrorMessage: '',
    }),
    [UpdateOurStorySuccess]: (state, { payload }) => ({
      ...state,
      UpdateOurStorySuccess: true,
      UpdateOurStorySuccessMessage: payload.message,
      UpdateOurStoryError: false,
      UpdateOurStoryErrorMessage: '',
    }),
    [UpdateOurStoryError]: (state, { payload } ) => ({
      ...state,
      UpdateOurStorySuccess: false,
      UpdateOurStorySuccessMessage: '',
      UpdateOurStoryError: true,
      UpdateOurStoryErrorMessage: payload.message,
    }),
    [OurStoryRequest]: (state) => ({
      ...state,
      OurStorySuccess: false,
      OurStoryData: {},
      OurStoryError: false,
    }),
    [OurStorySuccess]: (state, { payload }) => ({
      ...state,
      OurStorySuccess: true,
      OurStoryData: payload.data,
      OurStoryError: false,
    }),
    [OurStoryError]: (state) => ({
      ...state,
      OurStorySuccess: false,
      OurStoryData: {},
      OurStoryError: true,
    }),
  },
  initialState
);

export default reducer;