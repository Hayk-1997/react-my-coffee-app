import { handleActions } from 'redux-actions';
import {
    AwesomeSliderUpdateRequest, GetAwesomeSliderUpdateSuccess, GetAwesomeSliderUpdateError,
    GetAwesomeSliderRequest, GetAwesomeSliderSuccess, GetAwesomeSliderError
} from './actions';

const initialState = {
    GetAwesomeSliderUpdateSuccess: false,
    GetAwesomeSliderUpdateError: false,
    GetAwesomeSliderSuccess: false,
    GetAwesomeSliderError: false,
};

const reducer = handleActions(
    {
        [AwesomeSliderUpdateRequest]: (state) => ({
           ...state,
            GetAwesomeSliderUpdateSuccess: false,
            GetAwesomeSliderUpdateError: false,
        }),
        [GetAwesomeSliderUpdateSuccess]: (state) => ({
           ...state,
            GetAwesomeSliderUpdateSuccess: true,
            GetAwesomeSliderUpdateError: false,
        }),
        [GetAwesomeSliderUpdateError]: (state) => ({
           ...state,
            GetAwesomeSliderUpdateSuccess: true,
            GetAwesomeSliderUpdateError: false,
        }),
        [GetAwesomeSliderRequest]: (state) => ({
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