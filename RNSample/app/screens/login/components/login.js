import React, { Component } from 'react';
import { StyleSheet, View, NetInfo } from 'react-native';
import CustomHeader from '../../../common/Header';
import imagePath from '../../../common/imagePath';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loader from "../../../common/activityLoader";
import { checkConnection } from "../../../common/utils";
import { userLogin, clearData } from "../actions";

let isChecked = false;

class Login extends Component {

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
            userLoginData: null,
        }
    }

    static getDerivedStateFromProps(props, state) {

        if (props.userLoginData.data && isChecked == true) {
            if (props.userLoginData.data) {

                isChecked = false;
                props.clearData();
                return ({
                    checkNavigation: true,
                    isCheckedAlert: true,
                    okBtnTitle: I18n.t('ok_key'),
                    cancelBtnTitle: '',
                    alertTitle: I18n.t('registration_successMsg_title'),
                    alertMessage: I18n.t('registration_successMsg'),
                });
            }
            else if (props.error) {
                isChecked = false;
                let message1 = props.error.message;
                let title1 = props.error.title;
                props.clearData();
                return ({
                    checkNavigation: false,
                    isCheckedAlert: true,
                    alertTitle: title1,
                    alertMessage: message1,
                    okBtnTitle: I18n.t('ok_key'),
                    cancelBtnTitle: '',
                });
            }
            return null;
        }
    }


    onSubmitButtonPress = () => {

        let input = {

            email: 'test@gmail.com',
            password: '123456',
        };

        this.props.userLogin(input);

        // checkConnection().then((connected) => {
        //     if (connected) {
        //         isChecked = true;
        //         if (this.props.isLoading) return;
        //         this.props.userLogin(input);
        //     }
        //     else {
        //         this.setState({
        //             checkNavigation: false,
        //             isCheckedAlert: true,
        //             okBtnTitle: I18n.t('ok_key'),
        //             cancelBtnTitle: '',
        //             alertTitle: I18n.t('error_key'),
        //             alertMessage: I18n.t('no_internet_connection'),
        //         });
        //     }
        // });


        // NetInfo.getConnectionInfo().then((connectionInfo) => {
        //     console.log(
        //       'Initial, type: ' +
        //         connectionInfo.type +
        //         ', effectiveType: ' +
        //         connectionInfo.effectiveType,
        //     );
        //   });
        //   function handleFirstConnectivityChange(connectionInfo) {
        //     console.log(
        //       'First change, type: ' +
        //         connectionInfo.type +
        //         ', effectiveType: ' +
        //         connectionInfo.effectiveType,
        //     );
        //     NetInfo.removeEventListener(
        //       'connectionChange',
        //       handleFirstConnectivityChange,
        //     );
        //   }
        //   NetInfo.addEventListener('connectionChange', handleFirstConnectivityChange);
    }

    render() {
        return (

            <View style={styles.screen}>
                <CustomHeader
                    headerTitle={'Login'}
                    leftText={'Back'}
                    leftImage={imagePath.backArrow}
                    rightText={'Next'}
                    rightImage={imagePath.backArrow}
                    //onLeftButtonPress={this.onBackButtonPress.bind(this)}
                    onRightButtonPress={this.onSubmitButtonPress.bind(this)}
                />

                <Loader loading={this.props.isLoading} />
            </View>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        userLogin,
        clearData
    }, dispatch);
};

const mapStateToProps = state => ({
    isLoading: state.loginCombineReducer.loginReducers.isLoading,
    userLoginData: state.loginCombineReducer.loginReducers,
    error: state.loginCombineReducer.loginReducers.error,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});