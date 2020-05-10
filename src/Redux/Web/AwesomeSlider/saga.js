import { takeLatest, put } from 'redux-saga/effects';
import { axiosInstance } from '../../../Config/Axios/axiosInstance';
import { Coffee_AwesomeSliderRequest, Coffee_AwesomeSliderSuccess, Coffee_AwesomeSliderError } from './actions';

function* GetAwesomeSlider () {
    try {
        const response = yield axiosInstance.get('coffee/awesome-slider');
        if (response.status === 200) {
            yield put(Coffee_AwesomeSliderSuccess(response.data));
        } else {
            yield put(Coffee_AwesomeSliderError());
        }
    } catch (e) {
        yield put(Coffee_AwesomeSliderError());
    }
}

export default function* () {
    yield takeLatest(Coffee_AwesomeSliderRequest, GetAwesomeSlider);
}