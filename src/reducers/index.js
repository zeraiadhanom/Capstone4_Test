import { combineReducers } from 'redux';

import VideosReducer from './videos';

const rootReducer = combineReducers({
    
    video: VideosReducer,
 
});

export default rootReducer;