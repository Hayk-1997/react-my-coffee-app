import { takeLatest, put } from 'redux-saga/effects';
import { axiosInstance } from '../../../Config/Axios/axiosInstance';
import { AwesomeSliderRequest, GetAwesomeSliderSuccess, GetAwesomeSliderError } from './actions';

function* UpdateAwesomeSlider (action) {
    const { image, description, title } = action.payload;
    try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', image[0]);
       const response = yield axiosInstance.post('/awesome-slider',  formData);
       if (response && response.status === 200) {
            yield  put(GetAwesomeSliderSuccess(response.data));
       } else {
           console.log(response);
           yield put(GetAwesomeSliderError());
       }
    } catch (e) {
        yield put(GetAwesomeSliderError());
        console.log('AwesomeSlider Error: ', e);
    }
};

export default function* () {
    yield takeLatest(AwesomeSliderRequest, UpdateAwesomeSlider);
}