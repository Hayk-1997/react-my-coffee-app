import { createAction } from 'redux-actions';

export const CartRequest = createAction('CART_REQUEST');
export const CartSuccess = createAction('CART_SUCCESS');
export const CartError = createAction('CART_ERROR');