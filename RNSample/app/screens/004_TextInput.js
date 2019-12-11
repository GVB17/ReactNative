import React, {useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

const UseCardViewComponent = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setselectedNumber] = useState();

    const numberInputHandler = inputText => {
        //setEnteredValue(inputText);
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chooseNumber = parseInt(enteredValue);
        if(chooseNumber === NaN || chooseNumber <= 0 || chooseNumber > 99)
        {
            return;
        }
        setConfirmed(true);
        setselectedNumber(chooseNumber);
        setEnteredValue('') 
    };

    let confirmedOutput;
    if(confirmed) {
    confirmedOutput = <Text>Choose Number: {selectedNumber}</Text>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }
            
        }>
        <View style={styles.screen}>
            <Text style={styles.title}>Hi Venkat</Text>

            <Card>
                <Text>Sample text 1</Text>
                <Input 
                style={styles.input} 
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="number-pad"
                onChangedText={numberInputHandler}
                value={enteredValue}
                />
                <View>
                    <Button style={styles.buttonContainer} title="Reset" onPress={resetInputHandler} color={Colors.primary}/>
                    <Button style={styles.buttonContainer} title="Confirm" onPress={confirmInputHandler} />
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
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
    },
    input: {
        width: 100
    }
});

export default UseCardViewComponent;