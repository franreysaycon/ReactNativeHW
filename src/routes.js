import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './components/LoginScreen';
import TicketScreen from './components/TicketScreen';

export default Navigation = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  Tickets: {
  	screen: TicketScreen,
  	navigationOptions: {
  		header: null,
  	},
  },
});
