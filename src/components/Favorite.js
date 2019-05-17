import React, { Component } from "react";
import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';
import { connect } from 'react-redux';
import * as actions from '../actions';


 
class FAVIDEOS extends Component {
  componentWillMount() {
 //this.props.requestKvideos('children')
  }
  render()  {

    const {videos, selectedVideo} = this.props;
    

    return (
      <div>
        <section className="main">
            <p>THis is for fav videos</p>
            <VideoDetail video={selectedVideo} />
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



export default connect(mapStateToProps, actions)(FAVIDEOS);