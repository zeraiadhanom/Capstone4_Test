import { REQUEST_VIDEOS, SELECT_VIDEO,REQUEST_KVIDEOS, SELECT_KVIDEO } from '../actions/actionType';


export default function(state = {}, action) {
  switch(action.type) {
    case REQUEST_VIDEOS:
      return { ...state, 
        selectedVideo: action.payload.selectedVideo, 
        videos: action.payload.videos
       };
    case SELECT_VIDEO:
      return { ...state, selectedVideo: action.payload };

    case REQUEST_KVIDEOS:
      return {
        selectedVideo: action.payload.selectedVideo, 
        videos: action.payload.videos
      };
    case SELECT_KVIDEO:
    
        return { ...state, selectedVideo: action.payload };
      }
    return state;
}

