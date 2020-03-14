import { all } from 'redux-saga/effects';
import AdminLoginSagas from './Admin/Auth/Login/sagas';
import AdminRegisterSagas from './Admin/Auth/Register/sagas';
import GetAdminSagas from './Admin/getAdmin/sagas';
import SocialSignInSagas from './Web/Auth/SocialLogin/sagas';

export default function* rootSagas() {
    yield all([
        AdminLoginSagas(),
        AdminRegisterSagas(),
        GetAdminSagas(),
        SocialSignInSagas(),
    ]);
};