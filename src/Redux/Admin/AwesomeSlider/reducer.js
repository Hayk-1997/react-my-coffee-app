import { handleActions } from 'redux-actions';
import { AwesomeSliderRequest, GetAwesomeSliderSuccess, GetAwesomeSliderError } from './actions';

const initialState = {
    GetAwesomeSliderSuccess: false,
    GetAwesomeSliderError: false,
};

const reducer = handleActions(
    {
        [AwesomeSliderRequest]: (state) => ({
           ...state,
            GetAwesomeSliderSuccess: false,
            GetAwesomeSliderError: false,
        }),
        [GetAwesomeSliderSuccess]: (state) => ({
           ...state,
            GetAwesomeSliderSuccess: true,
            GetAwesomeSliderError: false,
        }),
        [GetAwesomeSliderError]: (state) => ({
           ...state,
            GetAwesomeSliderSuccess: true,
            GetAwesomeSliderError: false,
        }),
    },
    initialState
);
export default reducer;