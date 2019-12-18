import React, {Component} from "react";
import Router from "../router";
import {Provider} from "react-redux";
import store from "./common/store";
//import SplashScreen from 'react-native-splash-screen';

class App extends Component {

    componentDidMount() {
        //SplashScreen.hide()
        console.disableYellowBox = true;
    }
    
    render() {
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}

export default App;
