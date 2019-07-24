import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';

class ReduxSample2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
                <TouchableOpacity style={{
                    backgroundColor: 'gray',
                    width: wp('90%'),
                    height: hp('5%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 15
                }}
                    onPress={() => this.props.increaseCounter()}
                >
                    <Text style={{ color: 'white', fontWeight: '700' }}>Increase</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    backgroundColor: 'gray',
                    width: wp('90%'),
                    height: hp('5%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 15
                }}
                    onPress={() => this.props.decreaseCounter()}
                >
                    <Text style={{ color: 'white', fontWeight: '700' }}>Decrease</Text>
                </TouchableOpacity>
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
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxSample2)

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

