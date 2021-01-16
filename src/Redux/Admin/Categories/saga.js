import { takeLatest, put } from 'redux-saga/effects';
import { axiosInstance } from '../../../Config/Axios/axiosInstance';
import {
  AllCategoriesRequest,
  AllCategoriesSuccess,
  AllCategoriesError
} from './actions';

function* GetAllCategoriesData () {
  try {
    const response = yield axiosInstance.get('admin/categories');
    if (response.status === 200) {
      yield put(AllCategoriesSuccess(response.data));
    } else {
      yield put(AllCategoriesError());
    }
  } catch (e) {
    yield put(AllCategoriesError());
  }
}

export default function* () {
  yield takeLatest(AllCategoriesRequest, GetAllCategoriesData);
}