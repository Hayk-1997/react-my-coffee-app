import { all } from 'redux-saga/effects';
import AdminLoginSaga from './Admin/Auth/Login/saga';
import AdminRegisterSaga from './Admin/Auth/Register/saga';
import VerifyAdminTokenSaga from './Admin/VerifyAdminToken/saga';
import AdminAwesomeSliderSaga from './Admin/AwesomeSlider/saga';
import SocialSignInSaga from './Web/Auth/SocialLogin/saga';
import CoffeeAwesomeSliderSaga from './Web/AwesomeSlider/saga';

export default function* rootSagas() {
    yield all([
        AdminLoginSaga(),
        AdminRegisterSaga(),
        VerifyAdminTokenSaga(),
        SocialSignInSaga(),
        AdminAwesomeSliderSaga(),
        CoffeeAwesomeSliderSaga(),
    ]);
};