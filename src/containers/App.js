
import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SearchBar from '../components/searchBar';
import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';
import KidsVideo from '../components/KidsVideo';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.requestVideos('Eritrea')
    this.props.requestKvideos('children')
  }
  render() {
    const {videos, selectedVideo} = this.props;
    if (!videos || !selectedVideo) {
      return (
        <div>....Loading</div>
      )
    }
    return(
      <div className="App">
      <header className="App-header">
       <div className="menu">
         <ul className="nav">
           <li><a href="/">Home</a></li>
            <li><a href="/Favorite Videos/">Favorite Videos</a></li>
            <li>
              <KidsVideo />
            <a href="KidsVideo">Kids</a></li>
         </ul>
       </div>
       </header>

       <section className="searchBar">
           <SearchBar />
       </section >
        <section className="main">
           <VideoDetail video={selectedVideo} />
            <VideoList videos={videos} />
         </section>  
        </div>
    )
  }
}

function mapStateToProps(state) {
  
  return {
    videos: state.video.videos,
    selectedVideo: state.video.selectedVideo
  };
}

/*unction mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dispatch, Action)
  };
} */

export default connect(mapStateToProps, actions)(App);


//https://github.com/jamalsoueidan/react-redux-youtube-search-api/blob/master/src/components/application.js

