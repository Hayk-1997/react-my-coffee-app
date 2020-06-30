import { put, takeLatest } from 'redux-saga/effects';
import { Coffee_InfoRequest, Coffee_InfoSuccess, Coffee_InfoError }  from './actions';
import { axiosInstance } from '../../../Config/Axios/axiosInstance';

function* GetInfo (action) {
    const { lang } = action;
    try {
        const response = yield axiosInstance.get(`/coffee-info${lang}`);
        if (response.status === 200) {
            yield put(Coffee_InfoSuccess(response.data));
        } else {
            yield put(Coffee_InfoError());
        }
    } catch (e) {
        yield put(Coffee_InfoError());
    }
}

export default function* () {
    yield takeLatest(Coffee_InfoRequest, GetInfo);
}