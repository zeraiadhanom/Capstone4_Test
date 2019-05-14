import React, {Component} from 'react';
import './SaveVideo.css'


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

export default SaveVideo;