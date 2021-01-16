import { takeLatest, put } from 'redux-saga/effects';
import { axiosInstance } from '../../../Config/Axios/axiosInstance';
import {
  AllProductsRequest,
  AllProductsSuccess,
  AllProductsError,
  CreateProductRequest,
  CreateProductSuccess,
  CreateProductError,
  DeleteProductRequest,
  DeleteProductSuccess,
  DeleteProductError,
} from './actions';

function* GetAllProductsData () {
  try {
    const response = yield axiosInstance.get('admin/all-products');
    if (response.status === 200) {
      yield put(AllProductsSuccess(response.data));
    } else {
      yield put(AllProductsError());
    }
  } catch (e) {
    yield put(AllProductsError());
  }
}

function* CreateProduct ({ payload }) {
  try {
    const formData = new FormData();
    formData.append('form', JSON.stringify(payload));
    formData.append('thumbnail', payload.thumbnail);
    payload.thumbnail.map(thumbnail => formData.append('thumbnail', thumbnail));
    const response = yield axiosInstance.post('admin/product', formData);
    if (response.status === 200) {
      yield put(CreateProductSuccess(response.data));
    } else {
      yield put(CreateProductError(response.message.data));
    }
  } catch (e) {
    yield put(CreateProductError(e.response.message));
  }
}

function* DeleteProduct ({ payload }) {
  try {
    const response = yield axiosInstance.delete(`admin/product/${payload.id}`);
    if (response.status === 200) {
      yield put(DeleteProductSuccess(response.data));
    } else {
      yield put(DeleteProductError(response.message.data));
    }
  } catch (e) {
    yield put(DeleteProductError(e.response.message));
  }
}

export default function* () {
  yield takeLatest(AllProductsRequest, GetAllProductsData);
  yield takeLatest(CreateProductRequest, CreateProduct);
  yield takeLatest(DeleteProductRequest, DeleteProduct);
}