import React from 'react';


const Post = ({body}) => {
 return(
     <div>
         {body.map(post => {
             const {vidoId, title, description} = post;
             return(
                 <div key={_id}>
                 <h2>{title}</h2>
                 <p>{content}</p>
                 <hr />
                 </div>
             )
         })}
     </div>
 )
}


/*
const root = 'http://json...'
let url = root + 'videos'
let postVideo = new postVideo();
postVideo.create({
    userId: this._userId,
    videoId: this.videoId,
    title: this.title,
    comment: this.comment
})

   let options = {
       method:'POST',
       mode: 'cors',
       body: postVideo
   }
   let req = new Request(url, options);
   fetch(req)
   .then((response)=> {
       if(response.ok) {
           return response.json()
       } else {
           throw new Error('Bad http')
       }
   })
    .then((j) => {
        console.log(j)
    })
    .catch((err) =>{
        console.log
    })
   })
/*

const withQuery = require('with-query);

fetch(withQuery('https://youtbe.api', {
    q: 'query',
    sort: 'stars.
    maxResult: 5
}))
.then(res => res.json())
 .then(json) => {
     console
 }
*/