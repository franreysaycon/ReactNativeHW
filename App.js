import React from 'react';
import { 
  Button,
  StyleSheet, 
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import LoginScreen from './components/LoginScreen';

const RootStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
