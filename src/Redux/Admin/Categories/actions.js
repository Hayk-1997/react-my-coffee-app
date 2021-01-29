import { createAction } from 'redux-actions';

export const AllCategoriesRequest = createAction('ALL_CATEGORIES_REQUEST');
export const AllCategoriesSuccess = createAction('ALL_CATEGORIES_SUCCESS');
export const AllCategoriesError = createAction('ALL_CATEGORIES_ERROR');

export const CreateCategoryRequest = createAction('CREATE_CATEGORY_REQUEST');
export const CreateCategorySuccess = createAction('CREATE_CATEGORY_SUCCESS');
export const CreateCategoryError = createAction('CREATE_CATEGORY_ERROR');

export const GetCategoryProductsRequest = createAction('GET_CATEGORY_PRODUCTS_REQUEST');
export const GetCategoryProductsSuccess = createAction('GET_CATEGORY_PRODUCTS_SUCCESS');
export const GetCategoryProductsError = createAction('GET_CATEGORY_PRODUCTS_ERROR');
