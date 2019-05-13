import React from 'react';

const Post = ({body}) => {
 return(
     <div>
         {body.map(post => {
             const {_id, title, content} = post;
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