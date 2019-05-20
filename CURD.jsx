

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://api.mydomain.com')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  ...
}

export default App;

================


cnost getPosts = () => {
    return fetch(`https://jsonplaceholder.com`)
    .then (res => res.json())
    .then(posts => console.log(posts))
}

const post = {
    title: 'All about fetch',
    body: 'fetch is so cool',
    userId: 1
}

const newPost = post => {
    const options {
        method: 'POST',
        body: json.Stringfy(posts),
        headers: new headers({
            'content-type': 'application/json'
        })
    }
    return fetch(`https://jsonplaceholder.com`, options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(`ERROR:`)

}


check youtubelink: https://www.youtube.com/watch?v=tVQgfKqbX3M