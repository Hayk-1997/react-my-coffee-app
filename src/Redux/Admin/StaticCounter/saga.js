import { takeLatest, put } from 'redux-saga/effects';
import {
  StaticCounterRequest, StaticCounterSuccess, StaticCounterError
} from './actions';
import { axiosInstance } from '../../../Config/Axios/axiosInstance';

function* GetStaticCounter () {
  try {
    const response = yield axiosInstance.get('admin/static-counter');
    if (response.status === 200) {
      yield put(StaticCounterSuccess(response.data));
    } else {
      yield put(StaticCounterError());
    }
  } catch (e) {
    yield put(StaticCounterError());
  }
}

export default function* () {
  yield takeLatest(StaticCounterRequest, GetStaticCounter);
}