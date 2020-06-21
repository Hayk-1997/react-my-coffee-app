import { handleActions } from 'redux-actions';
import {
    Admin_InfoRequest, Admin_InfoSuccess,
    Admin_InfoError, Admin_UpdateInfoRequest,
    Admin_UpdateInfoSuccess, Admin_UpdateInfoError,
} from './actions';

const initialState = {
    InfoSuccess: false,
    InfoError: false,
    InfoData: {},
    UpdateInfoSuccess: false,
    UpdateInfoError: false,
};

const reducer = handleActions(
    {
        [Admin_InfoRequest]: (state) => ({
            ...state,
            InfoSuccess: false,
            InfoError: false,
            InfoData: {},
        }),
        [Admin_InfoSuccess]: (state, { payload }) => ({
            ...state,
            InfoSuccess: true,
            InfoError: false,
            InfoData: payload.data,
        }),
        [Admin_InfoError]: (state) => ({
            ...state,
            InfoSuccess: false,
            InfoError: true,
            InfoData: {},
        }),
        [Admin_UpdateInfoRequest]: (state) => ({
          ...state,
          UpdateInfoSuccess: false,
          UpdateInfoError: false,
        }),
        [Admin_UpdateInfoSuccess]: (state) => ({
          ...state,
          UpdateInfoSuccess: true,
          UpdateInfoError: false,
        }),
        [Admin_UpdateInfoError]: (state) => ({
          ...state,
          UpdateInfoSuccess: false,
          UpdateInfoError: false,
        }),
    },
    initialState
);

export default reducer;