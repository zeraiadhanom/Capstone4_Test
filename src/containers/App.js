import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import KidsVideo from '../components/KidsVideo';
import Home from '../components/Home';
import WATCH from '../components/Watch'
import FAVIDEOS from '../components/Favorite'
import {BrowserRouter as Router, Route, Link, HashRouter} from 'react-router-dom';

import './App.css';

class App extends Component { 
  render() {
    return(
      <HashRouter>
       <div className="App">
         <header className="App-header">
             <div className="menu">
               <ul className="nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/FAVIDEOS">Favorite Videos</Link> </li>  
                  <li><Link to="/KidsVideo">Kids</Link></li>
                  <li><Link to="/Watch">Watch</Link></li>
                 </ul>
                   {this.props.children}
               </div>
           </header>
           <div className="main">
               <Route exact path="/" component={Home}/>
               <Route path="/KidsVideo" component={KidsVideo}/>
               <Route path="/watch" component={WATCH}/>
               <Route path="/FAVIDEOS" component={FAVIDEOS}/>
               
           </div>
         </div>
       </HashRouter>
    )
}
}

function mapStateToProps(state) {
  
  return {
    videos: state.video.videos,
    selectedVideo: state.video.selectedVideo
    //selectedKvideo: state.video.selectedKvideo
  };
}



export default connect(mapStateToProps, actions)(App);

//check routhing example: https://medium.com/@khwsc1/step-by-step-guide-of-simple-routing-transition-effect-for-react-with-react-router-v4-and-9152db1566a0

//check Router sample; https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm
