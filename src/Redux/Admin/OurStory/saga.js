import { takeLatest, put } from 'redux-saga/effects';
import {
  OurStoryRequest, OurStorySuccess, OurStoryError,
  UpdateOurStoryRequest, UpdateOurStorySuccess, UpdateOurStoryError
} from './actions';
import { axiosInstance } from '../../../Config/Axios/axiosInstance';

function* GetOurStory () {
  try {
    const response = yield axiosInstance.get('admin/our-story');
    if (response.status === 200) {
      yield put(OurStorySuccess(response.data));
    } else {
      yield put(OurStoryError());
    }
  } catch (e) {
    yield put(OurStoryError());
  }
}

function* UpdateOurStory ({ payload }) {
  const { image, form } = payload;
  try {
    const formData = new FormData();
    formData.append('form', JSON.stringify(form));
    if (image.length) {
      formData.append('image', image[0]);
    }
    const response = yield axiosInstance.put('admin/our-story', formData);
    if (response.status === 200) {
      yield put(UpdateOurStorySuccess(response.data));
    } else {
      yield put(UpdateOurStoryError(response.message.data));
    }
  } catch (e) {
    yield put(UpdateOurStoryError(e.response.message));
  }
}

export default function* () {
  yield takeLatest(OurStoryRequest, GetOurStory);
  yield takeLatest(UpdateOurStoryRequest, UpdateOurStory);
}