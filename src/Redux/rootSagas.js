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
import Categories from './Admin/Categories/saga';
import Products from './Admin/Products/saga';

// Coffee
// import SocialSignIn from './Coffee/Auth/SocialLogin/saga';
import Register from './Coffee/Auth/Register/sagas';
import VerifyUserToken from './Coffee/Auth/Verify/sagas';
import Login from './Coffee/Auth/Login/sagas';

export default function* rootSagas() {
  yield all([
    AdminLogin(),
    AdminRegister(),
    VerifyAdminToken(),
    // SocialSignIn(),
    AwesomeSlider(),
    Info(),
    OurStory(),
    Services(),
    OurMenu(),
    StaticCounter(),
    IP(),
    Categories(),
    Products(),
    Register(),
    VerifyUserToken(),
    Login(),
  ]);
}