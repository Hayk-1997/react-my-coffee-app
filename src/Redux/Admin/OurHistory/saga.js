import { takeLatest, put } from 'redux-saga/effects';
import {
  OurHistoryRequest, OurHistorySuccess, OurHistoryError,
  UpdateOurHistoryRequest, UpdateOurHistorySuccess, UpdateOurHistoryError
} from './actions';
import { axiosInstance } from '../../../Config/Axios/axiosInstance';

function* GetOurHistory () {
  try {
    const response = yield axiosInstance.get('admin/our-history');
    if (response.status === 200) {
      yield put(OurHistorySuccess(response.data));
    } else {
      yield put(OurHistorySuccess());
    }
  } catch (e) {
    yield put(OurHistoryError());
  }
}

function* UpdateOurHistory (action) {
  const { image, form } = action.payload;
  try {
    const formData = new FormData();
    formData.append('form', JSON.stringify(form));
    if (image && image.length) {
      formData.append('image', image[0]);
    }
    const response = yield axiosInstance.put('admin/our-history', formData);
    if (response.status === 200) {
      yield put(UpdateOurHistorySuccess());
    } else {
      yield put(UpdateOurHistoryError(response.message.data));
    }
  } catch (e) {
    yield put(UpdateOurHistoryError(e.response.message));
  }
}

export default function*() {
  yield takeLatest(OurHistoryRequest, GetOurHistory);
  yield takeLatest(UpdateOurHistoryRequest, UpdateOurHistory);
}