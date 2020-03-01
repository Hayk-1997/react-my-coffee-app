import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import AdminLogin from './Admin/Auth/Login/reducer';
import AdminRegister from './Admin/Auth/Register/reducer';
import GetAdminRequest from './Admin/getAdmin/reducer';

const AppReducer = combineReducers({
    // toastr: toastrReducer,
    AdminLogin,
    AdminRegister,
    GetAdminRequest,
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