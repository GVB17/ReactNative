import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NavigationActions, StackActions } from "react-navigation";

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      emailInputValue: '',
      passwordInputValue: ''
    }
  }

  onChangedEmailValue(text) {

    this.setState({
      emailInputValue: text,
    });
  }

  onChangePwdValue(text) {

    this.setState({
      passwordInputValue: text,
    });
  }

  onLoginButtonPress = () => {

    const resetAction = StackActions.reset({
      key: null,
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'BottomTabNavigator' })],
    });
    this.props.navigation.dispatch(resetAction);
  }


  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={{
            width: wp('90%'),
            height: hp('5%'),
            paddingLeft: 5,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 4
          }}
          keyboardType='email-address'
          onChangeText={(text) => this.onChangeEmailValue(text)}
        />

        <TextInput
          style={{
            width: wp('90%'),
            height: hp('5%'),
            marginTop: 10,
            paddingLeft: 5,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 4
          }}
          onChangeText={(text) => this.onChangePwdValue(text)}
        />

        <TouchableOpacity style={{
          backgroundColor: 'blue',
          width: wp('90%'),
          height: hp('5%'),
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 15
        }}
          onPress={() => this.onLoginButtonPress()}
        >
          <Text style={{ color: 'white', fontWeight: '700' }}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
