import { handleActions } from 'redux-actions';
import {
    AdminTokenVerifyRequest,
    GetAdminTokenVerifySuccess,
    GetAdminTokenVerifyError
} from './actions';

const initialState = {
    GetAdminTokenVerifySuccess: false,
    GetAdminTokenVerifyError: false,
};

const reducer = handleActions(
    {
        [AdminTokenVerifyRequest]: (state) => ({
            ...state,
            GetAdminTokenVerifySuccess: false,
            GetAdminTokenVerifyError: false,
        }),
        [GetAdminTokenVerifySuccess]: (state) => ({
            ...state,
            GetAdminTokenVerifySuccess: true,
            GetAdminTokenVerifyError: false,
        }),
        [GetAdminTokenVerifyError]: (state) => ({
            ...state,
            GetAdminTokenVerifySuccess: false,
            GetAdminTokenVerifyError: true,
        }),
    },
    initialState
);

export default reducer;