import React, { Component } from "react";

import { connect } from 'react-redux';
import * as actions from '../actions';


 
class SaveVideo extends Component {
  componentWillMount() {
   this.props.addSvideos()
  // this.props.requestVideos('')
  
  }
  render()  {
    const {selectedVideo} = this.props;
    return (
      <div>
        <section className="main">
           
           
            <button onClick={SaveVideo}>Save</button>
           
        </section>  
      </div>
    );
  }
}
 
function mapStateToProps(state) {
  
  return {
   // videos: state.video.videos,
    selectedVideo: state.video.selectedVideo
  };
}



export default connect(mapStateToProps, actions)(SaveVideo);