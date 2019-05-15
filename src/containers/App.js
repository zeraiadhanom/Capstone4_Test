
import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SearchBar from '../components/searchBar';
import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';
import KidsVideo from '../components/KidsVideo';
import Home from '../components/Home';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.requestVideos('Eritrea')
    //this.props.requestKvideos('children') 
  }
  render() {
    const {videos, selectedVideo} = this.props;
     
    if (!videos || !selectedVideo) {
      return (
        <div>....Loading</div>
      )
    } 
    return(
      <Router>
       <div className="App">
         <header className="App-header">
             <div className="menu">
               <ul className="nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/FavoriteVideos">Favorite Videos</Link> </li>  
                  <li><Link to="/KidsVideo">Kids</Link>
                   </li>
                 </ul>
                   {this.props.children}
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
      </Router>
    )
  }
}

function mapStateToProps(state) {
  
  return {
    videos: state.video.videos,
    selectedVideo: state.video.selectedVideo
  };
}



export default connect(mapStateToProps, actions)(App);

//check routhing example: https://medium.com/@khwsc1/step-by-step-guide-of-simple-routing-transition-effect-for-react-with-react-router-v4-and-9152db1566a0



