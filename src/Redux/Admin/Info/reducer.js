import { handleActions } from 'redux-actions';
import { Admin_InfoRequest, Admin_InfoSuccess, Admin_InfoError } from './actions';

const initialState = {
    InfoSuccess: false,
    InfoError: false,
    InfoData: {},
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
    },
    initialState
);

export default reducer;