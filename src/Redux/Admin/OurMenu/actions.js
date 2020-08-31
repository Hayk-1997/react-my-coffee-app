import { createAction } from 'redux-actions';

export const OurMenuRequest = createAction('OUR_MENU_REQUEST');
export const OurMenuSuccess = createAction('OUR_MENU_SUCCESS');
export const OurMenuError = createAction('OUR_MENU_ERROR');

export const UpdateOurMenuRequest = createAction('UPDATE_OUR_MENU_REQUEST');
export const UpdateOurMenuSuccess = createAction('UPDATE_OUR_MENU_SUCCESS');
export const UpdateOurMenuError = createAction('UPDATE_OUR_MENU_ERROR');

export const UploadImageRequest = createAction('UPLOAD_IMAGE_REQUEST');
export const UploadImageSuccess = createAction('UPLOAD_IMAGE_SUCCESS');
export const UploadImageError = createAction('UPLOAD_IMAGE_ERROR');