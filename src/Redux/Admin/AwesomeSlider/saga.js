import { takeLatest, put } from 'redux-saga/effects';
import { axiosInstance } from '../../../Config/Axios/axiosInstance';
import {
    AwesomeSliderUpdateRequest, AwesomeSliderUpdateSuccess,
    AwesomeSliderUpdateError, AwesomeSliderRequest,
    AwesomeSliderSuccess, AwesomeSliderError
} from './actions';

function* GetAwesomeSliderData () {
    try {
        const response = yield axiosInstance.get('admin/awesome-slider');
        if (response.status === 200) {
            yield put(AwesomeSliderSuccess(response.data));
        } else {
            yield put(AwesomeSliderError());
        }
    } catch (e) {
        yield put(AwesomeSliderError());
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
            yield  put(AwesomeSliderUpdateSuccess(response.data));
        } else {
            yield put(AwesomeSliderUpdateError());
        }
    } catch (e) {
        console.log('AwesomeSlider Error: ', e);
        yield put(AwesomeSliderUpdateError());
    }
}

export default function* () {
    yield takeLatest(AwesomeSliderUpdateRequest, UpdateAwesomeSlider);
    yield takeLatest(AwesomeSliderRequest, GetAwesomeSliderData);
}