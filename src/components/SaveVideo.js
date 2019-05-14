import React, {Component} from 'react';
import './SaveVideo.css'
import { connect } from 'react-redux';
import * as actions from '../actions';


class SaveVideo extends Component {
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
            <label>
            </label>
            <button type="submit" value="Save-Video"></button>
          </form>
        )
    }
}

export default connect(null, actions)(SaveVideo);