import { all } from 'redux-saga/effects';

import AdminLoginSagas from './Admin/Auth/Login/sagas';
import AdminRegisterSagas from './Admin/Auth/Register/sagas';

export default function* rootSagas() {
    yield all([
        AdminLoginSagas(),
        AdminRegisterSagas(),
    ]);
};