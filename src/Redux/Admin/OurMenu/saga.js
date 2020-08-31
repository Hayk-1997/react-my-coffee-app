import { takeLatest, put } from 'redux-saga/effects';
import {
  OurMenuRequest, OurMenuSuccess, OurMenuError,
  UpdateOurMenuRequest, UpdateOurMenuSuccess, UpdateOurMenuError,
  UploadImageRequest, UploadImageSuccess, UploadImageError
} from './actions';
import { axiosInstance } from '../../../Config/Axios/axiosInstance';


function* GetOurMenu () {
  try {
    const response = yield axiosInstance.get('admin/our-menu');
    if (response.status === 200) {
      yield put(OurMenuSuccess(response.data));
    } else {
      yield put(OurMenuError());
    }
  } catch (e) {
    yield put(OurMenuError());
  }
}

function* UpdateOurMenu ({ payload }) {
  try {
    const response = yield axiosInstance.put('admin/our-menu', payload);
    if (response.status === 200) {
      yield put(UpdateOurMenuSuccess(response.data));
    } else {
      yield put(UpdateOurMenuError(response.message));
    }
  } catch (e) {
    yield put(UpdateOurMenuError(e.response.message));
  }
}

function* UploadImage ({ payload }) {
  try {
    const { file, lang, field } = payload;
    const formData = new FormData();
    formData.append('image', file);
    formData.append('field', field);
    formData.append('lang', lang);
    const response = yield axiosInstance.put('/admin/our-menu-image', formData);
    if (response.status === 200) {
      yield put(UploadImageSuccess(response.data));
    } else {
      yield put(UploadImageError(response.message));
    }
  } catch (e){
    yield put(UploadImageError(e.response.message));
  }
}

export default function* () {
  yield takeLatest(OurMenuRequest, GetOurMenu);
  yield takeLatest(UpdateOurMenuRequest, UpdateOurMenu);
  yield takeLatest(UploadImageRequest, UploadImage);
}