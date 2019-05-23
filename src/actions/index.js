
import YTSearch from 'youtube-api-search'
import {REQUEST_VIDEOS, 
       SELECT_VIDEO, 
       REQUEST_KVIDEOS, 
       SELECT_KVIDEO, 
       REQUEST_FVIDEOS,
       SELECT_FVIDEO, 
       ADD_FVIDO } from './actionType'


const API_KEY = 'AIzaSyBYhtoV6rW9kAGuxUPuFaYlK6JVRppseY4'
const DATABASE_URL = "http://localhost/api/auth";

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


/*
=========================================================================
The following is to get another fetch kids specific videos from the API; it needs 
to be modified to add more parameters[options]
*/
/*fetch kids video
const options = {
    part:'snippet',
    q:'children',
    type:'video',
    order:'rating',
    safeSearch:'restrict',
    relatedToVideoId:'kwgQ3t7X3JQ',
    maxResults:'10'
    =========================================================================
} */
 export const requestKvideos = (term) => (dispatch) => {
    
    YTSearch({key: API_KEY, term}, videos => {
        const payload = {
            videos,
            selectedKvideo: videos[0]
        }

        dispatch({type: REQUEST_KVIDEOS, payload })
    })
}

export function selectKvideo(video) {
    return { type: SELECT_KVIDEO, payload: video}
}


/* ===============================================
The below is a setup to communcate with server and fetch videos
it needs some correct configuration:
============================================================
*/

export const requestFvideos = () => (dispatch) => {
    
    return fetch('http://localhost:5000/videos')
     .then(response => response.json())
     .then(videos => {
         const payload = {
             videos,
             selectedFvideo: videos[0]
         }
         dispatch({type: REQUEST_FVIDEOS, payload})
     })
    }

export function selectFvideo(video) {
        return { type: SELECT_FVIDEO, payload: video}
 }


