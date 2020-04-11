import { handleActions } from 'redux-actions';
import {
    AdminLoginRequest, GetAdminLoginSuccess,
    GetAdminLoginError
} from './actions';

const initialState = {
    AdminLoginSuccess: false,
    AdminLoginToken: '',
    AdminLoginError: false,
};

const reducer = handleActions(
    {
        [AdminLoginRequest]: (state) => ({
            ...state,
            AdminLoginSuccess: false,
            AdminLoginToken: '',
            AdminLoginError: false,
        }),
        [GetAdminLoginSuccess]: (state, data) => ({
            ...state,
            AdminLoginSuccess: true,
            AdminLoginToken: data.payload.token,
            AdminLoginError: false,
        }),
        [GetAdminLoginError]: (state) => ({
            ...state,
            AdminLoginSuccess: false,
            AdminLoginToken: '',
            AdminLoginError: true,
        }),
    },
    initialState
);
export default reducer;