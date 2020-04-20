import { takeLatest, put } from 'redux-saga/effects';
import { axiosInstance } from '../../../Config/Axios/axiosInstance';
import {
    AwesomeSliderUpdateRequest, GetAwesomeSliderUpdateSuccess, GetAwesomeSliderUpdateError,

} from './actions';

function* getAwesomeSliderData () {

}
function* UpdateAwesomeSlider (action) {
    const {image, form} = action.payload;
    try {
        const formData = new FormData();
        formData.append('form', JSON.stringify(form));
         if (image.length) {
             formData.append('filepond', image[0]);
         }
        const response = yield axiosInstance.put('admin/awesome-slider', formData);
        if (response && response.status === 200) {
            yield  put(GetAwesomeSliderUpdateSuccess(response.data));
        } else {
            yield put(GetAwesomeSliderUpdateError());
        }
    } catch (e) {
        yield put(GetAwesomeSliderUpdateError());
        console.log('AwesomeSlider Error: ', e);
    }
}

export default function* () {
    yield takeLatest(AwesomeSliderUpdateRequest, UpdateAwesomeSlider);
}