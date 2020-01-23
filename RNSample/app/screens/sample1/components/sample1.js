import React, { Component } from 'react';
import { StyleSheet, View, NetInfo, Text, Picker, Alert, Button } from 'react-native';
import CustomHeader from '../../../common/Header';
import imagePath from '../../../common/imagePath';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Dialog, { SlideAnimation, DialogContent, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog';

class Sample1 extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    onSubmitButtonPress = () => {

        this.setState({ visible: true });

    }

    onPickerButtonPress = () => {
        console.log('picker')
        this.setState({ visible: false });
    };

    render() {
        return (

            <View style={styles.screen}>
                <CustomHeader
                    headerTitle={'Login'}
                    rightImage={imagePath.backArrow}
                    onRightButtonPress={this.onSubmitButtonPress.bind(this)}
                />

                <Dialog 
                //dialogStyle={{backgroundColor:'red', alignItems:'center', justifyContent:'center'}}
                    visible={this.state.visible}
                    onTouchOutside={() => {
                        this.setState({ visible: false });
                    }}>
                    <DialogContent style={{backgroundColor:'blue', }}>
                        <View style={{ height: 30, alignItems:'center', justifyContent:'center', marginTop: 12}}>
                            <Button
                                title="Press me"
                                onPress={() => this.onPickerButtonPress()}
                            />
                        </View>
                    </DialogContent>
                    <DialogContent style={{backgroundColor:'red', alignItems:'center', justifyContent:'center',}}>
                        <View style={{ height: 30, alignItems:'center', marginTop: 12}}>
                            <Button
                                title="Press me"
                                onPress={() => this.onPickerButtonPress()}
                            />
                        </View>
                    </DialogContent>
                </Dialog>

            </View>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
    }, dispatch);
};

const mapStateToProps = state => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sample1);


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});