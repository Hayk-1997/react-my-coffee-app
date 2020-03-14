import {handleActions} from "redux-actions";
import { SocialLoginRequest, GetSocialLoginSuccess, GetSocialLoginError } from "./actions";

const initialState = {
    SocialLoginRequest: false,
    SocialLoginError: false,
    SocialLoginSuccess: false,
    SocialLoginToken: {},
};

const reducer = handleActions(
    {
        [SocialLoginRequest]: (state) => ({
            ...state,
            SocialLoginRequest: true,
            SocialLoginError: false,
            SocialLoginSuccess: false,
            SocialLoginToken: {},
        }),
        [GetSocialLoginSuccess]: (state, data) => ({
            ...state,
            SocialLoginRequest: false,
            SocialLoginSuccess: true,
            SocialLoginError: false,
            SocialLoginToken: data.payload.token,
        }),
        [GetSocialLoginError]: (state) => ({
            ...state,
            SocialLoginRequest: false,
            SocialLoginSuccess: false,
            SocialLoginError: true,
            SocialLoginToken: {},
        }),
    },
    initialState
);

export default reducer;