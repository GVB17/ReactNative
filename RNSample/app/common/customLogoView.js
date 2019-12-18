import React, { Component } from "react";
import { View, Image, StyleSheet, Dimensions, Platform } from 'react-native';
import imagePath from '../common/imagePath';

export default class CustomLogoView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoView}>
                    <Image resizeMode="contain" style={styles.logo}
                        //source={imagePath.LogoDark}
                        >
                    </Image>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginTop: 50
    },
    logoView: {
        width: (Dimensions.get('screen').width / 3) - 20,
        height: (Dimensions.get('screen').width / 3) - 20
    },
    logo: {
        width: '100%',
        height: '100%'
    }
});