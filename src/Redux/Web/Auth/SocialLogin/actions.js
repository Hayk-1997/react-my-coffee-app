import { createAction } from 'redux-actions';

export const SocialLoginRequest = createAction('SOCIAL_LOGIN_REQUEST');
export const GetSocialLoginError = createAction('SOCIAL_LOGIN_ERROR');
export const GetSocialLoginSuccess = createAction('SOCIAL_LOGIN_SUCCESS');