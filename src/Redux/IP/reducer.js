import { handleActions } from 'redux-actions';
import { IPRequest, IPSuccess, IPError } from './actions';

const initialState = {
    IPSuccess: false,
    IPError: false,
    IP: {},
};

const reducer = handleActions(
    {
        [IPRequest]: (state) => ({
            ...state,
            IPSuccess: false,
            IPError: false,
            IP: {},
        }),
        [IPSuccess]: (state, { payload }) => ({
            ...state,
            IPSuccess: true,
            IPError: false,
            IP: payload,
        }),
        [IPError]: (state) => ({
            ...state,
            IPSuccess: false,
            IPError: true,
            IP: {},
        }),
    },
    initialState
);

export default reducer;