import { handleActions } from 'redux-actions';
import {
  AllCategoriesRequest,
  AllCategoriesSuccess,
  AllCategoriesError
} from './actions';

const initialState = {
  AllCategoriesSuccess: false,
  AllCategoriesError: false,
  AllCategoriesData: [],
};

const reducer = handleActions({
  [AllCategoriesRequest]: (state) => ({
    ...state,
    AllCategoriesSuccess: false,
    AllCategoriesError: false,
    AllCategoriesData: [],
  }),
  [AllCategoriesSuccess]: (state, { payload }) => ({
    ...state,
    AllCategoriesSuccess: true,
    AllCategoriesError: false,
    AllCategoriesData: payload.data,
  }),
  [AllCategoriesError]: (state) => ({
    ...state,
    AllCategoriesSuccess: false,
    AllCategoriesError: true,
    AllCategoriesData: [],
  }),
}, initialState);

export default reducer;