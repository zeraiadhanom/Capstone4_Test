
import YTSearch from 'youtube-api-search'
import {REQUEST_VIDEOS, 
       SELECT_VIDEO, 
       REQUEST_KVIDEOS, 
       SELECT_KVIDEO, 
       REQUEST_FVIDEOS,
       SELECT_FVIDEO, 
       ADD_SVIDEO,
       SELECT_SVIDEO } from './actionType'


const API_KEY = 'AIzaSyBYhtoV6rW9kAGuxUPuFaYlK6JVRppseY4'

export const requestVideos = (term) => (dispatch) => {
    
    YTSearch({key: API_KEY, term}, videos => {
        //console.log(videos)
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

    return fetch('/videos',
      { method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('authToken')
        }
    })
     .then(response => response.json())
     .then(videos => {
         console.log(videos)
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

 
 export const addSvideos = (term) => (dispatch) => {
    
    YTSearch({key: API_KEY, term}, videos => {
    
        const payload = {
            videos,
            selectedSVideo: videos[0]
        }
        dispatch({type: ADD_SVIDEO, payload})
        
       // let data = (videos[0])
    
             const  data = ( {
               "title": payload.videos[0].snippet.title,
                "description":payload.videos[0].snippet.description,
                "videoId":payload.videos[0].id.videoId
              } )
            //  console.log(data)
           
        let settings = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
           "Authorization" : 'Bearer ' + localStorage.getItem('authToken'),
           "Content-Type": "application/json" 
           } 
          };

          fetch('/videos/create', settings)
              .then(response => {
               if (response.ok){
                  return response.json();
                  console.log(response.json())
               }
		        else{
                 throw new Error('something went wrong');
               }
             })
        })
    }

    