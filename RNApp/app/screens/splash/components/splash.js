import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions, StackActions } from "react-navigation";

class splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const resetAction = StackActions.reset({
      key: null,
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View>
        <Text> splash </Text>
      </View>
    );
  }
}

export default splash;
