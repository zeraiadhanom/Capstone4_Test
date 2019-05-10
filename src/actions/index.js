
import YTSearch from 'youtube-api-search'
import {REQUEST_VIDEOS, SELECT_VIDEO, REQUEST_KVIDEOS, SELECT_KVIDEO} from './actionType'


const API_KEY = 'AIzaSyBYhtoV6rW9kAGuxUPuFaYlK6JVRppseY4'


export const requestVideos = (term) => (dispatch) => {
    YTSearch({key: API_KEY, term}, videos => {
        const payload = {
            videos,
            selectedVideo: videos[0]
        }
        dispatch({type: REQUEST_VIDEOS, payload})
    })
}

export function selectVideo(video) {
    return { type: SELECT_VIDEO, payload: video}
}

  
export const requestKvideos = (term) => (dispatch) => {
    YTSearch({key: API_KEY, term}, videos => {
        const payload = {
            videos,
            selectVideo: videos[0]
        }
        dispatch({type: REQUEST_KVIDEOS, payload })
    })
}

export function selectKvideo(video) {
    return { type: SELECT_KVIDEO, payload: video}
}





//https://github.com/sakoh/react-redux-youtube-player/blob/master/src/components/video_player.js