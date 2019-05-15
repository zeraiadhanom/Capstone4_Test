import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {requestKvideos} from '../actions/index'

class KidsVideo extends Component {
  
  componentWillMount() {
    
    //this.props.requestKvideos('children') 
     
  }
   
        render() {
        
          return(
            <button onClick={requestKvideos}>
              <p>Please watch kids video</p>

           </button>
          )
        }
      }


export default connect(null, actions)(KidsVideo);