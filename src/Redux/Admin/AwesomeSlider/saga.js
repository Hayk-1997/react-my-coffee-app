import { takeLatest, put } from 'redux-saga/effects';
import { axiosInstance } from '../../../Config/Axios/axiosInstance';
import {
  AwesomeSliderUpdateRequest, AwesomeSliderUpdateSuccess,
  AwesomeSliderUpdateError, Admin_AwesomeSliderRequest,
  Admin_AwesomeSliderSuccess, Admin_AwesomeSliderError
} from './actions';

function* GetAwesomeSliderData () {
  try {
    const response = yield axiosInstance.get('admin/awesome-slider');
    if (response.status === 200) {
      yield put(Admin_AwesomeSliderSuccess(response.data));
    } else {
      yield put(Admin_AwesomeSliderError());
    }
  } catch (e) {
    yield put(Admin_AwesomeSliderError());
  }
}

function* UpdateAwesomeSlider ({ payload }) {
  const { image, form } = payload;
  try {
    const formData = new FormData();
    formData.append('form', JSON.stringify(form));
    if (image && image.length) {
      formData.append('image', image[0]);
    }
    const response = yield axiosInstance.put('admin/awesome-slider', formData);
    if (response && response.status === 200) {
      yield put(AwesomeSliderUpdateSuccess(response.data));
    } else {
      yield put(AwesomeSliderUpdateError());
    }
  } catch (e) {
    yield put(AwesomeSliderUpdateError());
  }
}

export default function* () {
  yield takeLatest(AwesomeSliderUpdateRequest, UpdateAwesomeSlider);
  yield takeLatest(Admin_AwesomeSliderRequest, GetAwesomeSliderData);
}