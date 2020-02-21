import { handleActions } from 'redux-actions';

import {
    AdminRegisterRequest, GetAdminRegisterSuccess,
    GetAdminRegisterError,
} from './actions';

const initialState = {
    AdminRegisterSuccess: false,
    AdminRegisterError: false,
};

const reducer = handleActions(
    {
        [AdminRegisterRequest]: (state) => ({
            ...state,
            AdminRegisterSuccess: false,
            AdminRegisterError: false,
        }),
        [GetAdminRegisterSuccess]: (state) => ({
            ...state,
            AdminRegisterSuccess: true,
            AdminRegisterError: false,
        }),
        [GetAdminRegisterError]: (state) => ({
            ...state,
            AdminRegisterSuccess: false,
            AdminRegisterError: true,
        }),
    },
    initialState
);

export default reducer;

