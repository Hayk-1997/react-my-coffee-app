import { createAction } from 'redux-actions';

export const OurStoryRequest = createAction('OUR_STORY_REQUEST');
export const OurStorySuccess = createAction('OUR_STORY_SUCCESS');
export const OurStoryError = createAction('OUR_STORY_ERROR');

export const UpdateOurStoryRequest = createAction('CREATE_OUR_STORY_REQUEST');
export const UpdateOurStorySuccess = createAction('CREATE_OUR_STORY_SUCCESS');
export const UpdateOurStoryError = createAction('CREATE_OUR_STORY_ERROR');

