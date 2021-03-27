import { takeLatest, put } from 'redux-saga/effects';
import client from './../../../../graphQL/client';
import mutation from './mutation';

import {
  VerifyUserTokenRequest,
  VerifyUserTokenSuccess,
  VerifyUserTokenError
} from './actions';

function* VerifyUserToken () {
  try {
    const response = yield client.mutate({
      mutation
    }).then((response) => response).catch((error) => error);
    if (response.data.verifyUserToken) {
      yield put(VerifyUserTokenSuccess(response.data.verifyUserToken._id));
    } else {
      yield put(VerifyUserTokenError());
    }
  } catch (e) {
    yield put(VerifyUserTokenError());
  }
}

export default function* () {
  yield takeLatest(VerifyUserTokenRequest, VerifyUserToken);
}