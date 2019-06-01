import React from 'react'
import './style/video_list.css'
import VideoItem  from './video_item'
import VideoKitem from './video_Kitem'
import VideoFitem from './video_item'


export default function VideoList({videos}) {
    
    const videosList = videos.map(video =>
        <VideoItem key={video.etag} video={video} />
      );
      console.log('VideoItem')
      return (
        <section className="video-List">
          {videosList}
        </section>
      );
    }

  /*  export function VideoKlist ({videos}) {
      const videosKlist = videos.map(video => 
        <VideoKitem key={video.etag} video={video} />
      )
      console.log('VideoKitem')
      return (
        <section className="video-List" >
             {videosKlist}
        </section>
      )
    } */

    export function VideoFlist ({videos}) {
      const videosFlist = videos.map(video => 
        <VideoFitem key={video.etag} video={video} />
      )
      return (
        <section className="video-List" >
             {videosFlist}
        </section>
      )
    }