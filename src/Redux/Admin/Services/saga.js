import { takeLatest, put } from 'redux-saga/effects';
import {
  ServicesRequest, ServicesSuccess, ServicesError,
  UpdateServicesRequest, UpdateServicesSuccess, UpdateServicesError,
} from './actions';

import { axiosInstance } from '../../../Config/Axios/axiosInstance';

function* GetServices () {
  try {
    const response = yield axiosInstance.get('admin/services');
    if (response.status === 200) {
      yield put(ServicesSuccess(response.data));
    } else {
      yield put(ServicesError());
    }
  } catch (e) {
    yield put(ServicesError());
  }
}

function* UpdateServices({ payload }) {
  try {
    const response = yield axiosInstance.put('admin/services', payload);
    if (response.status === 200) {
      yield put(UpdateServicesSuccess(response.data));
    } else {
      yield put(UpdateServicesError(response.message));
    }
  } catch (e) {
    yield put(UpdateServicesError(e.response.message));
  }
}

export default function* () {
  yield takeLatest(ServicesRequest, GetServices);
  yield takeLatest(UpdateServicesRequest, UpdateServices);
}