import React, { Component } from 'react';
import {Provider} from 'react-redux'
import myStore from './store';
import ReduxSample2 from './ReduxSample2';

class reduxSample2App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Provider store={myStore}>
          <ReduxSample2 />
      </Provider>
    );
  }
}

export default reduxSample2App;
