import { takeLatest, put } from 'redux-saga/effects';
import client from './../../../../graphQL/client';
import mutation from './mutation';

import {
  LoginRequest,
  LoginSuccess,
  LoginError
} from './actions';

function* Login ({ payload }) {
  try {
    const response = yield client.mutate({
      variables: { ...payload },
      mutation,
    }).then(response => response).catch(error => error);
    if (response?.data?.login) {
      yield put(LoginSuccess(response.data.login));
    } else {
      yield put(LoginError(response.message));
    }
  } catch (e) {
    yield put(LoginError(e.errors));
  }
}

export default function* () {
  yield takeLatest(LoginRequest, Login);
}
