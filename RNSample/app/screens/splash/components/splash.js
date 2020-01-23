import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import {NavigationActions, StackActions} from "react-navigation";
import CustomHeader from '../../../common/Header';
import imagePath from '../../../common/imagePath';

class Splash extends Component {

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

    componentDidMount() {
        const resetAction = StackActions.reset({
            key: null,
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Sample2'})],
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (

            <View style={styles.screen}>
               
            </View>
        );
    }
}
export default Splash;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});