import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {requestKvideos} from '../actions/index'

class KidsVideo extends Component {
    onInputChange(term) {
        (this.props.requestKvideos(term));
     }
   
        render() {
        
          return(
            <button KidsVideo onClick={requestKvideos}>
            </button>
          )
        }
      }


export default connect(null, actions)(KidsVideo);