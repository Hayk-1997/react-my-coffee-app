import { takeLatest, put } from 'redux-saga/effects';
import { IPRequest, IPSuccess, IPError } from './actions';
import { axiosInstance } from '../../Config/Axios/axiosInstance';

function* getIPLocalization () {
  try {
    const response = yield axiosInstance.get('https://api.myip.com');
    if (response.status === 200) {
      yield put(IPSuccess(response.data));
    } else {
      yield put(IPError());
    }
  } catch (e) {
    yield put(IPError());
  }
}

export default function* () {
  yield takeLatest(IPRequest, getIPLocalization);
}