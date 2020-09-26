import { all } from 'redux-saga/effects';

import AdminLogin from './Admin/Auth/Login/saga';
import AdminRegister from './Admin/Auth/Register/saga';
import VerifyAdminToken from './Admin/VerifyAdminToken/saga';
import AwesomeSlider from './Admin/AwesomeSlider/saga';
import Info from './Admin/Info/saga';
import OurStory from './Admin/OurStory/saga';
import Services from './Admin/Services/saga';
import OurMenu from './Admin/OurMenu/saga';
import IP from './IP/saga';
import StaticCounter from './Admin/StaticCounter/saga';
import SocialSignIn from './Web/Auth/SocialLogin/saga';

export default function* rootSagas() {
  yield all([
    AdminLogin(),
    AdminRegister(),
    VerifyAdminToken(),
    SocialSignIn(),
    AwesomeSlider(),
    Info(),
    OurStory(),
    Services(),
    OurMenu(),
    StaticCounter(),
    IP(),
  ]);
}