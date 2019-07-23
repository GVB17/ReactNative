import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default class PersonsList extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            //then method calls, when axios.get completed.
            .then(res => {
                // this.setState({posts: res.data}) 
                this.setState({ posts: res.data.slice(0, 20) })
            })
    }

    alertItemName = (item) => {
        alert(item.body)
    }

    render() {
        return (
            <View>
                {
                    this.state.posts.map((item, index) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.container}
                            onPress={() => this.alertItemName(item)}>
                            <Text style={styles.text}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c'
    }
})