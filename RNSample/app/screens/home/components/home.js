import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import CustomHeader from '../../../common/Header';
import imagePath from '../../../common/imagePath';

class Home extends Component {

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

    render() {
        return (

            <View style={styles.screen}>
                <CustomHeader
                    headerTitle={'Home'}
                    leftText={'Back'}
                    leftImage={imagePath.backArrow}
                    //rightText={'Logout'}
                    //rightImage={imagePath.backArrow}
                    //onLeftButtonPress={this.onBackButtonPress.bind(this)}
                />
            </View>
        );
    }
}
export default Home;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});