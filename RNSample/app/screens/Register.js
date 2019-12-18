import React, { Component, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomHeader from '../common/Header';
import InputWithTitle from '../common/InputWithTitle';
import CheckBox from 'react-native-check-box';
import imagePath from '../common/imagePath';

import MyCheckBox from '../common/checkbox';

class Register extends Component {

    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);
        this.state = {
            pwd: '',
            emailInputValue: '',
            firstName: '',
            lastName: '',
            dob: '',
            password: {
                value: '',
                isValid: false
            },
            checked: true,
        }
    }

    onChangedEmailValue(text) {

        this.setState({
            emailInputValue: text,
        });
        this.isCheckedValidation();
    }

    _onChangePassword(password, isValid) {

        this.setState({
            password: { value: password, isValid: isValid },
            pwd: password,
        });
        this.isCheckedValidation();
    }

    renderCheckBox() {
        return (
            <View style={styles.container}>
                <CheckBox
                    style={{ flex: 1, padding: 10, marginLeft: 6, }}
                    onClick={() => {
                        this.setState({
                            isChecked: !this.state.isChecked
                        })
                    }}
                    isChecked={this.state.isChecked}
                    rightText={"CheckBox"}
                    //checkBoxColor={'red'}
                    uncheckedCheckBoxColor={'gray'}
                    checkedCheckBoxColor={'blue'}
                />
            </View>
        );
    }

    onBackButtonPress = () => {
        this.props.navigation.goBack();
    };

    render() {
        return (

            <View style={styles.screen}>
                <CustomHeader
                    headerTitle={'Home'}
                    leftText={'Back'}
                    leftImage={imagePath.backArrow}
                    rightText={'Back'}
                    rightImage={imagePath.backArrow}
                    onLeftButtonPress={this.onBackButtonPress.bind(this)}
                />
                <KeyboardAwareScrollView style={styles.wrapper} enableOnAndroid={true} bounces={false} keyboardShouldPersistTaps='always'>
                    {/* <InputWithTitle titleText={'Email'} style={styles.textInputView} keyboardType='email-address' value={''} onChangeText={(text) => this.onChangedEmailValue(text)} /> */}
                    {/* <InputWithTitle titleText={'Email'} returnKeyType="done" keyboardType='email-address' style={styles.textInputView}/> */}

                    {/* {this.renderCheckBox()} */}
                </KeyboardAwareScrollView>
            </View>
        );
    }
}

export default Register;


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
    container: {
        //flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        //backgroundColor: 'red',
    },
});