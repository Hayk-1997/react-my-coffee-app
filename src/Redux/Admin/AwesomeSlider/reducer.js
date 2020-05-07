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
    awesomeSliderData: {},
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
            GetAwesomeSliderUpdateSuccess: false,
            GetAwesomeSliderUpdateError: true,
        }),
        [GetAwesomeSliderRequest]: (state) => ({
           ...state,
            GetAwesomeSliderSuccess: false,
            GetAwesomeSliderError: false,
            awesomeSliderData: {},
        }),
        [GetAwesomeSliderSuccess]: (state, { payload }) => ({
           ...state,
            GetAwesomeSliderSuccess: true,
            GetAwesomeSliderError: false,
            awesomeSliderData: payload.data,
        }),
        [GetAwesomeSliderError]: (state) => ({
           ...state,
            GetAwesomeSliderSuccess: false,
            GetAwesomeSliderError: true,
            awesomeSliderData: {},
        }),
    },
    initialState
);
export default reducer;