import { takeLatest, put } from 'redux-saga/effects';
import client from './../../../../graphQL/client';
import mutation from './mutation';

import {
  CartRequest,
  CartSuccess,
  CartError
} from './actions';

function* GetCarts () {
  try {
    const response = yield client.query({
      mutation
    }).then(response => response).catch(error => error);
    if (response.data.CartQuery) {
      yield put (CartSuccess(response.data.CartQuery))
    } else {

    }
  } catch (e) {

  }
}