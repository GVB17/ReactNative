import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import config from '../config/config';

const Header = props => {
    return (
        <View style={styles.container}>

            <View style={styles.statusBar} />

            <View style={styles.headerSubContainer}>

                <TouchableOpacity style={styles.leftContainer}
                    onPress={props.onLeftButtonPress}>
                    <Image
                        source={props.leftImage}
                        style={styles.imageView}
                    />
                    <Text style={styles.leftText}>{props.leftText}</Text>
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{props.headerTitle}</Text>
                </View>

                <TouchableOpacity style={styles.rightContainer}
                    onPress={props.onRightButtonPress}>
                    <Text style={styles.rightText}>{props.rightText}</Text>
                    <Image
                        source={props.rightImage}
                        style={styles.imageView}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        backgroundColor: config.colors.primaryColor,
        height: 44 + getStatusBarHeight()
    },
    statusBar: { 
        width: "100%", 
        height: getStatusBarHeight(), 
        backgroundColor: config.colors.primaryColor
    },
    headerSubContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },
    leftContainer: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8
    },
    imageView: {
        width: 18,
        height: 20,
    },
    leftText: {
        color: 'white',
        marginLeft: 3,
        color: config.colors.whiteColor,
        //fontFamily: config.fontFamily.font_sourceSansPro_regular,
        // fontSize: config.fonts.font_2_3,
    },
    titleContainer: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'transparent'
    },
    titleText: { 
        color: 'white',
        fontWeight: 'bold',
        color: config.colors.whiteColor,
        //fontFamily: config.fontFamily.font_sourceSansPro_regular,
        //fontSize: config.fonts.font_2_3,
    },
    rightContainer: { 
        backgroundColor: 'transparent', 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginRight: 8 
    },
    rightText: { 
        color: 'white' ,
        marginRight: 3,
        color: config.colors.whiteColor,
        //fontFamily: config.fontFamily.font_sourceSansPro_regular,
        //fontSize: config.fonts.font_2_3,
    }
});

export default Header;