import React from 'react';
import './video_detail.css'

export default function VideoDetail({ video }) {
   console.log({video})

  if(!video) {
    return (
      <div>...Loading</div>
    );
  }

  const {
    snippet: { title, description }, id: { videoId }
  } = video;

  const url = `https://youtube.com/embed/${videoId}`;

  return (
    
    <div className="video-detail">
       <iframe width="560" height="349" className="videoPlay" src={url}frameborder="0" allowfullscreen alt="videoPlay"></iframe>
       <p><strong>{title}</strong></p>
        <p>{description}</p>
      </div>
    
  );
};

