import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import {connect} from 'react-redux'

class counterScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                backgroundColor = "#4f6d7a"
                barStyle = 'light-content' 
                />
                <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={()=>this.props.increaseCounter()}>
                        <Text style={{ fontSize: 20 }}>Increase</Text>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>

                    <TouchableOpacity onPress={()=>this.props.decreaseCounter()}>
                        <Text style={{ fontSize: 20 }}>Decrease</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({type:'INCREASE_COUNTER'}),
        decreaseCounter: () => dispatch({type:'DECREASE_COUNTER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(counterScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4f6d7a',
    },
});
