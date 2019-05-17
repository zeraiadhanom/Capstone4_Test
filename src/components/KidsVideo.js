import React, { Component } from "react";
import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';
import { connect } from 'react-redux';
import * as actions from '../actions';


 
class KidsVideo extends Component {
  componentWillMount() {
 //this.props.requestKvideos('children')
  }
  render()  {
    const {videos, selectedKvideo} = this.props;
     
    if (!videos || !selectedKvideo) {
      return (
        <div>....Loading</div>
      )
    } 

    return (
      <div>
        <section className="main">
            <VideoDetail video={selectedKvideo} />
            <VideoList videos={videos} />
        </section>  
      </div>
    );
  }
}
 
function mapStateToProps(state) {
  
  return {
    videos: state.video.videos,
    selectedVideo: state.video.selectedKvideo
  };
}



export default connect(mapStateToProps, actions)(KidsVideo);