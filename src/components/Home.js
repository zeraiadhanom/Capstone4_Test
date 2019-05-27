import React from 'react';
import './Home.css';
//import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import KidsVideo from '../components/KidsVideo';
import WATCH from '../components/Watch'
import FAVIDEOS from '../components/favorite'
import {BrowserRouter as Router, Route, Link, HashRouter} from 'react-router-dom';
import HeaderBar from '../components/header-bar'

export default class Home extends React.Component {
   
    render() {
        return (
            <HashRouter>
       <div className="App">
         <header className="App-header">
             <div className="menu">
               <ul className="nav">
                  <li><Link to="/Home">Home</Link></li>
                  <li><Link to="/FAVIDEOS">Favorite Videos</Link> </li>  
                  <li><Link to="/KidsVideo">Kids</Link></li>
                  <li><Link to="/Watch">Watch</Link></li>
                  <li><Link to="/HeaderBar">Log Out</Link></li>
                  
                 </ul>
                   {this.props.children}
               </div>
           </header>
           <div className="main">
               <Route path="/KidsVideo" component={KidsVideo}/>
               <Route path="/watch" component={WATCH}/>
               <Route path="/FAVIDEOS" component={FAVIDEOS}/>
               <Route path="/" component={HeaderBar}/> 
           </div>
         </div>
       </HashRouter>
        );
    }
}
/*function mapStateToProps(state) {
  
}



export default connect(mapStateToProps, actions)(Home);*/