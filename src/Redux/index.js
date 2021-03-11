import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
// ADMIN
import AdminLogin from './Admin/Auth/Login/reducer';
import AdminRegister from './Admin/Auth/Register/reducer';
import VerifyAdminToken from './Admin/VerifyAdminToken/reducer';
import AdminAwesomeSlider from './Admin/AwesomeSlider/reducer';
import Info from './Admin/Info/reducer';
import OurStory from './Admin/OurStory/reducer';
import Services from './Admin/Services/reducer';
import OurMenu from './Admin/OurMenu/reducer';
import StaticCounter from './Admin/StaticCounter/reducer';
import Categories from './Admin/Categories/reducer';
import Products from './Admin/Products/reducer';
// COFFEE
import IP from './IP/reducer';
import Register from './Coffee/Auth/Register/reducer';
import VerifyUserToken from './Coffee/Auth/Verify/reducer';
import Login from './Coffee/Auth/Login/reducer';
// import SocialSignIn from './Coffee/Auth/SocialLogin/reducer';

const AppReducer = combineReducers({
  // toastr: toastrReducer,
  AdminLogin,
  AdminRegister,
  VerifyAdminToken,
  // SocialSignIn,
  AdminAwesomeSlider,
  Info,
  OurStory,
  Services,
  OurMenu,
  IP,
  StaticCounter,
  Categories,
  Products,
  //Coffee
  Register,
  VerifyUserToken,
  Login
});

const rootReducer = (state, action) => {
  let newState;
  if (action.type === 'RESET') {
    if (state && state.app) {
      const { app } = state;
      newState = { app };
    } else {
      newState = undefined;
    }
  } else {
    newState = state;
  }

  return AppReducer(newState, action);
};

export default rootReducer;