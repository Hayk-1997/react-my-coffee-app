import { takeLatest, put } from 'redux-saga/effects';
import { AdminLoginRequest, GetAdminLoginSuccess, GetAdminLoginError } from './actions';
import { axiosInstance } from "../../../../Config/Axios/axiosInstance";

function* AdminLogin (action) {
    try {
        const response = yield axiosInstance.post('admin-login', action.payload);
        if (response.status === 200) {
            yield put(GetAdminLoginSuccess(response.data));
        }
    } catch (e) {
        console.log('Login Error: ', e);
        yield put(GetAdminLoginError());
    }
}

export default function* () {
    yield takeLatest(AdminLoginRequest, AdminLogin);
}