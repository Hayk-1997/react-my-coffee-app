import { all } from 'redux-saga/effects';

import AdminLoginSaga from './Admin/Auth/Login/saga';
import AdminRegisterSaga from './Admin/Auth/Register/saga';
import VerifyAdminTokenSaga from './Admin/VerifyAdminToken/saga';
import AwesomeSliderSaga from './Admin/AwesomeSlider/saga';
import InfoSaga from './Admin/Info/saga';
import OurStorySaga from './Admin/OurStory/saga';
import ServicesSaga from './Admin/Services/saga';
import OurMenuSaga from './Admin/OurMenu/saga';
import IPSaga from './IP/saga';
import SocialSignInSaga from './Web/Auth/SocialLogin/saga';

export default function* rootSagas() {
  yield all([
    AdminLoginSaga(),
    AdminRegisterSaga(),
    VerifyAdminTokenSaga(),
    SocialSignInSaga(),
    AwesomeSliderSaga(),
    InfoSaga(),
    OurStorySaga(),
    ServicesSaga(),
    OurMenuSaga(),
    IPSaga(),
  ]);
}