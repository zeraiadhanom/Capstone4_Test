import React, {Component} from 'react';


class SaveVideo extends Component {
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Save-Video" />
          </form>
        )
    }
}

export default SaveVideo;