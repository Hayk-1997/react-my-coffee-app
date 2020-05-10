import { handleActions } from 'redux-actions';
import { Coffee_AwesomeSliderRequest, Coffee_AwesomeSliderSuccess, Coffee_AwesomeSliderError } from './actions';

const initialState = {
    Coffee_AwesomeSliderSuccess: false,
    Coffee_AwesomeSliderError: false,
    Coffee_AwesomeSliderData: {},
};

const reducer = handleActions(
    {
        [Coffee_AwesomeSliderRequest]: (state) => ({
            ...state,
            Coffee_AwesomeSliderSuccess: false,
            Coffee_AwesomeSliderError: false,
            Coffee_AwesomeSliderData: {},
        }),
        [Coffee_AwesomeSliderSuccess]: (state, { payload }) => ({
            ...state,
            Coffee_AwesomeSliderSuccess: true,
            Coffee_AwesomeSliderError: false,
            Coffee_AwesomeSliderData: payload.data,
        }),
        [Coffee_AwesomeSliderError]: (state, { payload }) => ({
            ...state,
            Coffee_AwesomeSliderSuccess: false,
            Coffee_AwesomeSliderError: true,
            Coffee_AwesomeSliderData: {},
        }),
    },
    initialState,
);

export default reducer;