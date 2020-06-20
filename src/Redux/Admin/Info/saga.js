import { takeLatest, put } from 'redux-saga/effects';
import { Admin_InfoRequest, Admin_InfoSuccess, Admin_InfoError } from './actions';
import { axiosInstance } from '../../../Config/Axios/axiosInstance';

function* GetAdminInfoData() {
    try {
        const response = yield axiosInstance.get('admin/info');
        if (response.status === 200) {
            yield put(Admin_InfoSuccess(response.data));
        } else {
            yield put(Admin_InfoError());
        }
    } catch (e) {
        yield put(Admin_InfoError());
    }
}

export default function* () {
    yield takeLatest(Admin_InfoRequest, GetAdminInfoData);
}