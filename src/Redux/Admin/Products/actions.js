import { createAction } from 'redux-actions';

export const AllProductsRequest = createAction('ALL_PRODUCTS_REQUEST');
export const AllProductsSuccess = createAction('ALL_PRODUCTS_SUCCESS');
export const AllProductsError = createAction('ALL_PRODUCTS_ERROR');

export const CreateProductRequest = createAction('CREATE_PRODUCT_REQUEST');
export const CreateProductSuccess = createAction('CREATE_PRODUCT_SUCCESS');
export const CreateProductError = createAction('CREATE_PRODUCT_ERROR');

export const DeleteProductRequest = createAction('DELETE_PRODUCT_REQUEST');
export const DeleteProductSuccess = createAction('DELETE_PRODUCT_SUCCESS');
export const DeleteProductError = createAction('DELETE_PRODUCT_ERROR');
