/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);

import Register from './app/screens/Register';
AppRegistry.registerComponent(appName, () => Register);
