import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';

const UseCardViewComponent = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Hi Venkat</Text>

            <Card>
                <Text>Sample text 1</Text>
                <TextInput />
                <View>
                    <Button style={styles.buttonContainer} title="Reset" onPress={() => { }} color={Colors.primary}/>
                    <Button style={styles.buttonContainer} title="Confirm" onPress={() => { }} />
                </View>
            </Card>
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
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
});

export default UseCardViewComponent;