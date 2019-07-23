import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import CounterScreen from './counterScreen';
import { Provider } from 'react-redux'

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return { counter: state.counter + 1 }
        case 'DECREASE_COUNTER':
            return { counter: state.counter - 1 }
    }
    return state
}

const myStore = createStore(reducer)

class counterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Provider store={myStore}>
            <CounterScreen />
        </Provider>
    );
  }
}

export default counterApp;
