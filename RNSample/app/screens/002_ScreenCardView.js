import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ScreenCardView = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Hi Venkat</Text>

            <View style={styles.inputContainer}>
                <Text>Sample text 1</Text>
                <TextInput />
                <View>
                    <View style={styles.button}><Button style={styles.buttonContainer} title="Reset" onPress={() => { }} /></View>
                    <View styles={styles.button}><Button title="Confirm" onPress={() => { }} /></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    }
});

export default ScreenCardView;