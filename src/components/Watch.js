import React, { Component } from "react";
import SearchBar from '../components/searchBar';
import VideoList from '../components/video_list';
import '../components/video_list.css';
import VideoDetail from '../components/video_detail';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './Watch.css'

 
class WATCH extends Component {
  componentWillMount() {
    //this.props.requestVideos('Eritrea')
  }
  render()  {
    const {videos, selectedVideo} = this.props;
     
    if (!videos || !selectedVideo) {
      return (
        <div>....Loading</div>
      )
    } 

    return (
      <div>
        <section className="searchBar">
             <SearchBar />
        </section >
        <section className="main">
            <VideoDetail video={selectedVideo} />
            <VideoList videos={videos} className='video-List'/>
        </section>  
      </div>
    );
  }
}
 
function mapStateToProps(state) {
  
  return {
    videos: state.video.videos,
    selectedVideo: state.video.selectedVideo
  };
}



export default connect(mapStateToProps, actions)(WATCH);