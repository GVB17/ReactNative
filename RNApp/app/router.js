import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import { Home } from './screens/home';
import { Profile } from './screens/profile';
import { Settings } from './screens/settings';

  const TabNavigator = createBottomTabNavigator({
    Home: Home,
    Settings: Settings,
    Profile: Profile
  }); 
  
  export default createAppContainer(TabNavigator);
