import { takeLatest, put } from 'redux-saga/effects';
import client from './../../../../graphQL/client';
import mutation from './mutation';

import {
  RegisterRequest,
  RegisterSuccess,
  RegisterError,
} from './actions';

function* Register({ payload }) {
  try {
    const response = yield client.mutate({
      variables: { ...payload },
      mutation,
    }).then((response) => response).catch((error) => error);
    if (response.data.registration._id) {
      yield put(RegisterSuccess(response.data.registration));
    } else {
      yield put(RegisterError(response.message));
    }
  } catch (e) {
    put(RegisterError(e.errors));
  }
}

export default function* () {
  yield takeLatest(RegisterRequest, Register);
}