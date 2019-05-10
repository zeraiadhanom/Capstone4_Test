
import {
   FETCH_VIDEO_PENDING, 
   FETCH_VIDEO_SUCCESS, 
   FETCH_VIDEO_ERROR } from '../actions/index';


const initialState = {
    pending: false,
    Videos: [],
    error: null
}

export function videosReducer(state = initialState, action) {
   switch(action.type) {
    case FETCH_VIDEO_PENDING:
      return {
      ...state,
      pending: true
     }  
    case FETCH_VIDEO_SUCCESS:
      return {
      ...state,
      pending: false,
      videos: action.payoad
    }
    case FETCH_VIDEO_ERROR:
     return {
        ...state,
        pending: false,
        error: action.error
      }
     default:
        return state;
  }
}


export const getVideos = state => state.videos;
export const getVideosPending = state => state.pending;
export const getVideosError = state => state.error;

export default videosReducer;