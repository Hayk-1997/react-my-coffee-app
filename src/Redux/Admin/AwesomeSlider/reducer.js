import { handleActions } from 'redux-actions';
import {
  AwesomeSliderUpdateRequest, AwesomeSliderUpdateSuccess,
  AwesomeSliderUpdateError, Admin_AwesomeSliderRequest,
  Admin_AwesomeSliderSuccess, Admin_AwesomeSliderError
} from './actions';

const initialState = {
  AwesomeSliderUpdateSuccess: false,
  AwesomeSliderUpdateError: false,
  AwesomeSliderSuccess: false,
  AwesomeSliderError: false,
  awesomeSliderData: {},
};

const reducer = handleActions(
  {
    [AwesomeSliderUpdateRequest]: (state) => ({
      ...state,
      AwesomeSliderUpdateSuccess: false,
      AwesomeSliderUpdateError: false,
    }),
    [AwesomeSliderUpdateSuccess]: (state) => ({
      ...state,
      AwesomeSliderUpdateSuccess: true,
      AwesomeSliderUpdateError: false,
    }),
    [AwesomeSliderUpdateError]: (state) => ({
      ...state,
      AwesomeSliderUpdateSuccess: false,
      AwesomeSliderUpdateError: true,
    }),
    [Admin_AwesomeSliderRequest]: (state) => ({
      ...state,
      AwesomeSliderSuccess: false,
      AwesomeSliderError: false,
      awesomeSliderData: {},
    }),
    [Admin_AwesomeSliderSuccess]: (state, { payload }) => ({
      ...state,
      AwesomeSliderSuccess: true,
      AwesomeSliderError: false,
      awesomeSliderData: payload.data,
    }),
    [Admin_AwesomeSliderError]: (state) => ({
      ...state,
      AwesomeSliderSuccess: false,
      AwesomeSliderError: true,
      awesomeSliderData: {},
    }),
  },
  initialState
);
export default reducer;