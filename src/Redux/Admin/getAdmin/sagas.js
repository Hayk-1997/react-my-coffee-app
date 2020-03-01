import { takeLatest, put } from 'redux-saga/effects';
import {GetAdminRequest, GetAdminSuccess, GetAdminError} from  './actions';
import { axiosInstance } from '../../../Config/Axios/axiosInstance';

function* GetAdmin (action) {
    try {
        const response = yield axiosInstance.post('get-admin', {
            token: action.payload
        });
        if (response.status === 200) {
            yield put(GetAdminSuccess(response.data));
        } else {
            yield put(GetAdminError());
        }
    } catch (e) {
        console.log("Get Admin Error", e);
        yield put(GetAdminError());
    }
}

export default function* () {
    yield takeLatest(GetAdminRequest, GetAdmin);
}