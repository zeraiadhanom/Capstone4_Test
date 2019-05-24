import React, { Component } from "react";
import VideoDetail from './video_detail';
import { connect } from 'react-redux';
import * as actions from '../actions';


 
class SaveVideo extends Component {
  componentWillMount() {
    this.props.requestFvideos()
  }
  render()  {
    const {selectedFvideo} = this.props;
    return (
      <div>
        <section className="main">
           
            <VideoDetail video={selectedFvideo} />
           
        </section>  
      </div>
    );
  }
}
 
function mapStateToProps(state) {
  
  return {
    videos: state.video.videos,
    selectedFvideo: state.video.selectedFvideo
  };
}



export default connect(mapStateToProps, actions)(SaveVideo);