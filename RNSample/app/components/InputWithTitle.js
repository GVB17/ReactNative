import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputWithTitle = props => {
    return (
        <View style={styles.screenView}>
            <Text style={styles.text}>{props.titleText}</Text>
            <TextInput {...props} style={{ ...styles.input, ...props.style}}/>
        </View>
    );
}

const styles = StyleSheet.create({  
    screenView: {
        flex: 1, 
        flexDirection: 'column', 
        marginHorizontal: 15, 
        marginVertical: 15
    },
    text: {
        backgroundColor:'white', 
        paddingLeft: 5
    },
    input: {
        height: 30,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        //marginVertical: 10,
        padding: 5
    },
});

export default InputWithTitle;
