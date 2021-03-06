import { handleActions } from 'redux-actions';
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
  UpdateProductRequest,
  UpdateProductSuccess,
  UpdateProductError
} from './actions';

const initialState = {
  AllProductsSuccess: false,
  AllProductsError: false,
  AllProductsData: [],
  CreateProductSuccess: false,
  CreateProductSuccessMessage: '',
  CreateProductError: false,
  CreateProductErrorMessage: '',
  DeleteProductSuccess: false,
  DeleteProductSuccessMessage: '',
  DeleteProductError: false,
  DeleteProductErrorMessage: '',
  UpdateProductSuccess: false,
  UpdateProductSuccessMessage: '',
  UpdateProductError: false,
  UpdateProductErrorMessage: '',
};

const reducer = handleActions({
  [AllProductsRequest]: (state) => ({
    ...state,
    AllProductsSuccess: false,
    AllProductsError: false,
    AllProductsData: [],
  }),
  [AllProductsSuccess]: (state, { payload }) => ({
    ...state,
    AllProductsSuccess: true,
    AllProductsError: false,
    AllProductsData: payload.data,
  }),
  [AllProductsError]: (state) => ({
    ...state,
    AllProductsSuccess: false,
    AllProductsError: true,
    AllProductsData: [],
  }),
  [CreateProductRequest]: (state) => ({
    ...state,
    CreateProductSuccess: false,
    CreateProductSuccessMessage: '',
    CreateProductError: false,
    CreateProductErrorMessage: '',
  }),
  [CreateProductSuccess]: (state, { payload }) => ({
    ...state,
    CreateProductSuccess: true,
    CreateProductSuccessMessage: payload.message,
    CreateProductError: false,
    CreateProductErrorMessage: '',
  }),
  [CreateProductError]: (state, { payload }) => ({
    ...state,
    CreateProductSuccess: false,
    CreateProductSuccessMessage: '',
    CreateProductError: true,
    CreateProductErrorMessage: payload.message,
  }),

  [DeleteProductRequest]: (state) => ({
    ...state,
    DeleteProductSuccess: false,
    DeleteProductSuccessMessage: '',
    DeleteProductError: false,
    DeleteProductErrorMessage: '',
  }),
  [DeleteProductSuccess]: (state, { payload }) => ({
    ...state,
    DeleteProductSuccess: true,
    DeleteProductSuccessMessage: payload.message,
    DeleteProductError: false,
    DeleteProductErrorMessage: '',
  }),
  [DeleteProductError]: (state, { payload }) => ({
    ...state,
    DeleteProductSuccess: false,
    DeleteProductSuccessMessage: '',
    DeleteProductError: true,
    DeleteProductErrorMessage: payload.message,
  }),

  [UpdateProductRequest]: (state) => ({
    ...state,
    UpdateProductSuccess: false,
    UpdateProductSuccessMessage: '',
    UpdateProductError: false,
    UpdateProductErrorMessage: '',
  }),
  [UpdateProductSuccess]: (state, { payload }) => ({
    ...state,
    UpdateProductSuccess: true,
    UpdateProductSuccessMessage: payload.message,
    UpdateProductError: false,
    UpdateProductErrorMessage: '',
  }),
  [UpdateProductError]: (state, { payload }) => ({
    ...state,
    UpdateProductSuccess: false,
    UpdateProductSuccessMessage: '',
    UpdateProductError: true,
    UpdateProductErrorMessage: payload.message,
  }),
}, initialState);

export default reducer;