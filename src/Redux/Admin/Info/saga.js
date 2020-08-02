import { takeLatest, put } from 'redux-saga/effects';
import {
  Admin_InfoRequest, Admin_InfoSuccess,
  Admin_InfoError, Admin_UpdateInfoRequest,
  Admin_UpdateInfoSuccess, Admin_UpdateInfoError,
} from './actions';
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

function* UpdateInfo(action) {
  try {
    const response = yield axiosInstance.put('admin/info-update', action.payload);
    if (response.status === 200) {
      yield put(Admin_UpdateInfoSuccess(response.data));
    } else {
      yield put(Admin_UpdateInfoError());
    }
  } catch (e) {
    yield put(Admin_UpdateInfoError());
  }
}

export default function* () {
  yield takeLatest(Admin_InfoRequest, GetAdminInfoData);
  yield takeLatest(Admin_UpdateInfoRequest, UpdateInfo);
}