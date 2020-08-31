import { handleActions } from 'redux-actions';
import {
  OurMenuRequest, OurMenuSuccess, OurMenuError,
  UpdateOurMenuRequest, UpdateOurMenuSuccess, UpdateOurMenuError,
  UploadImageRequest, UploadImageSuccess, UploadImageError
} from './actions';

const initialState = {
  OurMenuSuccess: false,
  OurMenuData: {},
  OurMenuError: false,
  UpdateOurMenuSuccess: false,
  UpdateOurMenuSuccessMessage: '',
  UpdateOurMenuError: false,
  UpdateOurMenuErrorMessage: '',
  UploadImageSuccess: false,
  UploadImageSuccessMessage: '',
  UploadImageError: false,
  UploadImageErrorMessage: '',
};

const reducer = handleActions({
  [OurMenuRequest]: (state) => ({
    ...state,
    OurMenuSuccess: false,
    OurMenuData: {},
    OurMenuError: false,
  }),
  [OurMenuSuccess]: (state, { payload }) => ({
    ...state,
    OurMenuSuccess: true,
    OurMenuData: payload.data,
    OurMenuError: false,
  }),
  [OurMenuError]: (state) => ({
    ...state,
    OurMenuSuccess: false,
    OurMenuData: {},
    OurMenuError: true,
  }),
  [UpdateOurMenuRequest]: (state) => ({
    ...state,
    UpdateOurMenuSuccess: false,
    UpdateOurMenuError: false,
  }),
  [UpdateOurMenuSuccess]: (state, { payload }) => ({
    ...state,
    UpdateOurMenuSuccess: true,
    UpdateOurMenuSuccessMessage: payload.message,
    UpdateOurMenuError: false,
    UpdateOurMenuErrorMessage: ''
  }),
  [UpdateOurMenuError]: (state, { payload }) => ({
    ...state,
    UpdateOurMenuSuccess: false,
    UpdateOurMenuSuccessMessage: '',
    UpdateOurMenuError: true,
    UpdateOurMenuErrorMessage: payload.message,
  }),
  [UploadImageRequest]: (state) => ({
    ...state,
    UploadImageSuccess: false,
    UploadImageSuccessMessage: '',
    UploadImageError: false,
    UploadImageErrorMessage: '',
  }),
  [UploadImageSuccess]: (state, { payload }) => ({
    ...state,
    UploadImageSuccess: true,
    UploadImageSuccessMessage: payload.message,
    UploadImageError: false,
    UploadImageErrorMessage: '',
  }),
  [UploadImageError]: (state, { payload }) => ({
    ...state,
    UploadImageSuccess: false,
    UploadImageSuccessMessage: '',
    UploadImageError: true,
    UploadImageErrorMessage: payload.message,
  }),
}, initialState);

export default reducer;