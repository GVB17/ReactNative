import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import CheckBox from 'react-native-check-box';

const Checkbox = props => {

    const [isChecked, setIsChecked] = useState(true);


    const numberInputHandler = inputText => {
        //setEnteredValue(inputText);
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        //setEnteredValue('');
        setIsChecked(!this.state.isChecked);
    };


    return (
        <View style={styles.container}>
            <CheckBox
                style={{ flex: 1, padding: 10, marginLeft: 6, }}
                onClick={() => { resetInputHandler
                    // this.setState({
                    //     isChecked: !this.state.isChecked
                    // })
                }}
                isChecked={isChecked}
                rightText={props.text}
                //checkBoxColor={'red'}
                uncheckedCheckBoxColor={'gray'}
                checkedCheckBoxColor={'blue'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default Checkbox;