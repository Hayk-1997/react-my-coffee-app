import { takeLatest, put } from 'redux-saga/effects';
import { AdminRegisterRequest, GetAdminRegisterSuccess, GetAdminRegisterError } from './actions';
import { axiosInstance } from '../../../../Config/Axios/axiosInstance';

function* AdminRegister (action) {
    try {
        const response = yield axiosInstance.post('admin/register', action.payload);
        if (response.status === 201) {
            yield put(GetAdminRegisterSuccess(response.data));
        } else {
            //
        }
    } catch (e) {
        console.log('Register Error: ', e);
        yield put(GetAdminRegisterError());
    }
}

export default function* () {
    yield takeLatest(AdminRegisterRequest, AdminRegister);
}

