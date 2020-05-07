import { takeLatest, put } from 'redux-saga/effects';
import { axiosInstance } from '../../../Config/Axios/axiosInstance';
import {
    AwesomeSliderUpdateRequest, GetAwesomeSliderUpdateSuccess, GetAwesomeSliderUpdateError,
    GetAwesomeSliderRequest, GetAwesomeSliderSuccess, GetAwesomeSliderError
} from './actions';

function* getAwesomeSliderData () {
    try {
        const response = yield axiosInstance.get('admin/awesome-slider');
        if (response.status === 200) {
            yield put(GetAwesomeSliderSuccess(response.data));
        } else {
            yield put(GetAwesomeSliderError(response.data));
        }
    } catch (e) {
        console.log('AwesomeSlider Error: ', e);
        yield put(GetAwesomeSliderError());
    }
}
function* UpdateAwesomeSlider (action) {
    const {image, form} = action.payload;
    try {
        const formData = new FormData();
        formData.append('form', JSON.stringify(form));
         if (image && image.length) {
             formData.append('image', image[0]);
         }
        const response = yield axiosInstance.put('admin/awesome-slider', formData);
        if (response && response.status === 200) {
            yield  put(GetAwesomeSliderUpdateSuccess(response.data));
        } else {
            yield put(GetAwesomeSliderUpdateError());
        }
    } catch (e) {
        console.log('AwesomeSlider Error: ', e);
        yield put(GetAwesomeSliderUpdateError());
    }
}

export default function* () {
    yield takeLatest(AwesomeSliderUpdateRequest, UpdateAwesomeSlider);
    yield takeLatest(GetAwesomeSliderRequest, getAwesomeSliderData);
}