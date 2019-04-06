import React, { Component } from 'react';

import HelloWorld from './views/hello-world/hello-world';

class Main extends Component {

  state = {
    isAuthentified: false
  }

  render() {
    return (
      <div >
        <HelloWorld />
      </div>
    )
  }
}

export default Main;
