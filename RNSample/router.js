import React from "react";
//import { createBottomTabNavigator, createStackNavigator } from "react-navigation";

import { Login } from "./app/screens/login";
import { Splash } from "./app/screens/splash";
import { Home } from "./app/screens/home";
import { Profile } from "./app/screens/profile";

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const HomeNavigator = createStackNavigator({
    Home: {
        screen: Home,
    },
},
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);

const ProfileNavigator = createStackNavigator({
    Profile: {
        screen: Profile,
    },
},
    {
        initialRouteName: 'Profile',
        headerMode: 'none'
    }
);

const stackNavigator = createStackNavigator({
    Splash: {
        screen: Splash
    },
    Login: {
        screen: Login,
    },
    // Main: {
    //     screen: Home
    // },
},
    {
        initialRouteName: 'Splash',
        headerMode: 'none'
    }
)

export default createAppContainer(stackNavigator);