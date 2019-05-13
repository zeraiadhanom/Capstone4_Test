import React from 'react'
import './video_list.css'
import VideoItem  from './video_item'
import VideoKitem from './video_item'


export default function VideoList({videos}) {
    
    console.log('this')

    const videosList = videos.map(video =>
        <VideoItem key={video.etag} video={video} />
      );
    
      return (
        <section className="video-List">
          {videosList}
        </section>
      );
    }

    export function VideoKlist ({videos}) {
      const videosKlist = videos.map(video => 
        <VideoKitem key={video.etag} video={video} />
      )
      return (
        <section className="video-List" >
             {videosKlist}
        </section>
      )
    }
