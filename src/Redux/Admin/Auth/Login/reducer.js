import { handleActions } from 'redux-actions';
import {
    AdminLoginRequest, GetAdminLoginSuccess,
    GetAdminLoginError
} from './actions';

const initialState = {
    AdminLoginSuccess: false,
    AdminLoginError: false,
};

const reducer = handleActions(
    {
        [AdminLoginRequest]: (state) => ({
            ...state,
            AdminLoginSuccess: false,
            AdminLoginError: false,
        }),
        [GetAdminLoginSuccess]: (state) => ({
            ...state,
            AdminLoginSuccess: true,
            AdminLoginError: false,
        }),
        [GetAdminLoginError]: (state) => ({
            ...state,
            AdminLoginSuccess: false,
            AdminLoginError: true,
        }),
    },
    initialState
);
export default reducer;