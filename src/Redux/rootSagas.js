import { all } from 'redux-saga/effects';
import AdminLoginSagas from './Admin/Auth/Login/sagas';
import AdminRegisterSagas from './Admin/Auth/Register/sagas';
import VerifyAdminTokenSagas from './Admin/VerifyAdminToken/sagas';
import SocialSignInSagas from './Web/Auth/SocialLogin/sagas';
import UpdateAwesomeSliderSagas from './Admin/AwesomeSlider/sagas';

export default function* rootSagas() {
    yield all([
        AdminLoginSagas(),
        AdminRegisterSagas(),
        VerifyAdminTokenSagas(),
        SocialSignInSagas(),
        UpdateAwesomeSliderSagas(),
    ]);
};