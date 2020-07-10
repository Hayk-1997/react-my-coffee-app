import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
// ADMIN
import AdminLogin from './Admin/Auth/Login/reducer';
import AdminRegister from './Admin/Auth/Register/reducer';
import VerifyAdminToken from './Admin/VerifyAdminToken/reducer';
import SocialSignIn from './Web/Auth/SocialLogin/reducer';
import AdminAwesomeSlider from './Admin/AwesomeSlider/reducer';
import AdminInfoData from './Admin/Info/reducer';


// COFFEE
import CoffeeAwesomeSlider from './Web/AwesomeSlider/reducer';
import IP from './IP/reducer';

const AppReducer = combineReducers({
  // toastr: toastrReducer,
  AdminLogin,
  AdminRegister,
  VerifyAdminToken,
  SocialSignIn,
  AdminAwesomeSlider,
  CoffeeAwesomeSlider,
  AdminInfoData,
  IP
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