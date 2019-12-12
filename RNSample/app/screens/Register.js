import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomHeader from '../../app/components/Header';
import InputWithTitle from '../../app/components/InputWithTitle';

export default class Register extends Component {
  render() {
    return (
      <View style={styles.screen}>
          <CustomHeader title={'Home'}/>
          <KeyboardAwareScrollView style={styles.wrapper} enableOnAndroid={true} bounces={false} keyboardShouldPersistTaps='always'>
          <InputWithTitle color={'red'} titleText={'Email'} autoCapitalize='none' keyboardType='email-address' style={styles.textInputView}/>
          <InputWithTitle titleText={'Email'} autoCapitalize='none' keyboardType='email-address' style={styles.textInputView}/>
          <InputWithTitle titleText={'Email'} autoCapitalize='none' keyboardType='email-address' style={styles.textInputView}/>
          <InputWithTitle titleText={'Email'} autoCapitalize='none' keyboardType='email-address' style={styles.textInputView}/>
          <InputWithTitle titleText={'Email'} autoCapitalize='none' keyboardType='email-address' style={styles.textInputView}/>
          <InputWithTitle titleText={'Email'} autoCapitalize='none' keyboardType='email-address' style={styles.textInputView}/>
          <InputWithTitle titleText={'Email'} autoCapitalize='none' keyboardType='email-address' style={styles.textInputView}/>
          </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        marginTop: 20,
    },
    textInputView: {
        // paddingLeft: 5,
        // paddingRight: 5,
        // fontSize: RF(config.fonts.font_2_1),
        //backgroundColor: 'red'
    },
});