import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import { Splash } from './screens/splash';
import { Login } from './screens/login';
import { Home } from './screens/home';
import { Profile } from './screens/profile';
import { Settings } from './screens/settings';

const TabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    Settings: Settings,
    Profile: Profile
  }
);

const StackNavigator = createStackNavigator({
  SplashScreen: Splash,
  LoginScreen: Login,
  BottomTabNavigator: TabNavigator
},
  {
    initialRouteName: "SplashScreen",
    headerMode: "none"
  }
);

export default createAppContainer(StackNavigator);
