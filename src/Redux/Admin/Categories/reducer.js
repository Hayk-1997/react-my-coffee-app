import { handleActions } from 'redux-actions';
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

const initialState = {
  AllCategoriesSuccess: false,
  AllCategoriesError: false,
  AllCategoriesData: [],
  CreateCategorySuccess: false,
  CreateCategorySuccessMessage: '',
  CreateCategoryError: false,
  CreateCategoryErrorMessage: '',
  GetCategoryProductsSuccess: false,
  GetCategoryProductsData: [],
  GetCategoryProductsError: false,
};

const reducer = handleActions({
  [AllCategoriesRequest]: (state) => ({
    ...state,
    AllCategoriesSuccess: false,
    AllCategoriesError: false,
    AllCategoriesData: [],
  }),
  [AllCategoriesSuccess]: (state, { payload }) => ({
    ...state,
    AllCategoriesSuccess: true,
    AllCategoriesError: false,
    AllCategoriesData: payload.data,
  }),
  [AllCategoriesError]: (state) => ({
    ...state,
    AllCategoriesSuccess: false,
    AllCategoriesError: true,
    AllCategoriesData: [],
  }),
  [CreateCategoryRequest]: (state) => ({
    ...state,
    CreateCategorySuccess: false,
    CreateCategorySuccessMessage: '',
    CreateCategoryError: false,
    CreateCategoryErrorMessage: ''
  }),
  [CreateCategorySuccess]: (state, { payload }) => ({
    ...state,
    CreateCategorySuccess: true,
    CreateCategorySuccessMessage: payload.messages,
    CreateCategoryError: false,
    CreateCategoryErrorMessage: ''
  }),
  [CreateCategoryError]: (state, { payload }) => ({
    ...state,
    CreateCategorySuccess: false,
    CreateCategorySuccessMessage: '',
    CreateCategoryError: true,
    CreateCategoryErrorMessage: payload.messages
  }),
  [GetCategoryProductsRequest]: (state) => ({
    ...state,
    GetCategoryProductsSuccess: false,
    GetCategoryProductsData: [],
    GetCategoryProductsError: false,
  }),
  [GetCategoryProductsSuccess]: (state, { payload }) => ({
    ...state,
    GetCategoryProductsSuccess: true,
    GetCategoryProductsData: payload.data,
    GetCategoryProductsError: false,
  }),
  [GetCategoryProductsError]: (state) => ({
    ...state,
    GetCategoryProductsSuccess: false,
    GetCategoryProductsData: [],
    GetCategoryProductsError: true,
  }),
}, initialState);

export default reducer;