import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default class MoviesList extends React.Component {

    state = {
        movies: []
    }

    componentDidMount() {
        axios.get('http://facebook.github.io/react-native/movies.json')
        .then(res => {
            this.setState({movies: res.data.movies}) 
        })
    }

    render() {
        console.log("RES:",this.state.movies)
        return (
            <View>
                <Text>Axios Sample</Text>
            </View>
        )
    }
}