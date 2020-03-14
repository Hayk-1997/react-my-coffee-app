import { takeLatest, put } from 'redux-saga/effects';
import { SocialLoginRequest, GetSocialLoginError, GetSocialLoginSuccess } from "./actions";
import { axiosInstance } from "../../../../Config/Axios/axiosInstance";

function* SocialSignIn (action) {
    try {
        const response = yield axiosInstance.post('social-login', action.payload);
        debugger
        if (response.status === 200) {
            yield put(GetSocialLoginSuccess(response.data));
        } else {
            //
        }
    } catch (e) {
        console.log('Register Error: ', e);
        yield put(GetSocialLoginError());
    }
}

export default function* () {
    yield takeLatest(SocialLoginRequest, SocialSignIn);
}
