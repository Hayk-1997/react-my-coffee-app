import { takeLatest, put } from 'redux-saga/effects';
import { AdminTokenVerifyRequest, GetAdminTokenVerifySuccess, GetAdminTokenVerifyError} from  './actions';
import { axiosInstance } from '../../../Config/Axios/axiosInstance';

function* VerifyAdminToken (action) {
    try {
        const response = yield axiosInstance.post('verify-admin-token', {
            token: action.payload
        });
        if (response && response.status === 200) {
            yield put(GetAdminTokenVerifySuccess(response.data));
        } else {
            yield put(GetAdminTokenVerifyError());
        }
    } catch (e) {
        console.log('Get Admin Error: ', e);
        yield put(GetAdminTokenVerifyError());
    }
}

export default function* () {
    yield takeLatest(AdminTokenVerifyRequest, VerifyAdminToken);
}