import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Screen1 = props => {
    return (
        <View style={styles.screen}>
            <Text>Hi Venkat</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems:'center'
    }
});

export default Screen1;