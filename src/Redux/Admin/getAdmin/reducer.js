import { handleActions } from 'redux-actions';
import {
    GetAdminRequest, GetAdminSuccess, GetAdminError
} from './actions';

const initialState = {
    GetAdminSuccess: false,
    GetAdminError: false,
};

const reducer = handleActions(
    {
        [GetAdminRequest]: (state) => ({
            ...state,
            GetAdminSuccess: false,
            GetAdminError: false,
        }),
        [GetAdminSuccess]: (state) => ({
            ...state,
            GetAdminSuccess: true,
            GetAdminError: false,
        }),
        [GetAdminError]: (state) => ({
            ...state,
            GetAdminSuccess: false,
            GetAdminError: true,
        }),
    },
    initialState
);

export default reducer;