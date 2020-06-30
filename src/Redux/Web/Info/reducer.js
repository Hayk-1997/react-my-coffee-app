import { handleActions } from 'redux-actions';
import { Coffee_InfoRequest, Coffee_InfoSuccess, Coffee_InfoError }  from './actions';

const initialState = {
    InfoSuccess: false,
    InfoError: false,
    InfoData: {},
};

const reducer = handleActions(
    {
        [Coffee_InfoRequest]: (state) => ({
            ...state,
            InfoSuccess: false,
            InfoError: false,
            InfoData: {},
        }),
        [Coffee_InfoSuccess]: (state, { payload }) => ({
            ...state,
            InfoSuccess: true,
            InfoError: false,
            InfoData: payload.data,
        }),
        [Coffee_InfoError]: (state ) => ({
            ...state,
            InfoSuccess: false,
            InfoError: true,
            InfoData: {},
        }),
    },
    initialState
);

export default reducer;