import { takeLatest, put } from 'redux-saga/effects';
import { axiosInstance } from '../../../Config/Axios/axiosInstance';
import {
  AllCategoriesRequest,
  AllCategoriesSuccess,
  AllCategoriesError,
  CreateCategoryRequest,
  CreateCategorySuccess,
  CreateCategoryError,
  GetCategoryProductsRequest,
  GetCategoryProductsSuccess,
  GetCategoryProductsError
} from './actions';

function* GetAllCategoriesData () {
  try {
    const response = yield axiosInstance.get('admin/all-categories');
    if (response.status === 200) {
      yield put(AllCategoriesSuccess(response.data));
    } else {
      yield put(AllCategoriesError());
    }
  } catch (e) {
    yield put(AllCategoriesError());
  }
}

function* CreateCategory ({ payload }) {
  try {
    const { form } = payload;
    const formData = new FormData();
    formData.append('form', form);
    const response = yield axiosInstance.post('admin/category', form);
    if (response.status === 200) {
      yield put(CreateCategorySuccess(response.data));
    } else {
      yield put(CreateCategoryError(response.message.data));
    }
  } catch (e) {
    yield put(CreateCategoryError(e.response.message));
  }
}

function* GetCategoryProducts ({ payload }) {
  try {
    const { id } = payload;
    const response = yield axiosInstance.get(`admin/category-products/${id}`);
    if (response.status === 200) {
      yield put(GetCategoryProductsSuccess(response.data));
    } else {
      yield put(GetCategoryProductsError(response.message.data));
    }
  } catch (e) {
    yield put(GetCategoryProductsError(e.response.message));
  }
}

export default function* () {
  yield takeLatest(AllCategoriesRequest, GetAllCategoriesData);
  yield takeLatest(CreateCategoryRequest, CreateCategory);
  yield takeLatest(GetCategoryProductsRequest, GetCategoryProducts);
}