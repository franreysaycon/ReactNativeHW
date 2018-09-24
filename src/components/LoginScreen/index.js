import React from 'react';
import { 
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { FormLabel } from 'react-native-elements';
import TextInputField from '../Common/TextInputField';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  login
} from '../../actions/LoginActions';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidUpdate(prevProps){
    if(this.props.loginStatus.accessToken){
      this.props.navigation.navigate('Tickets');
    }
  }

  onInputChange = (key, input) => {
    var c = {};
    c[key] = input;
    this.setState(c);
   }

  onButtonClick = () => {
    this.props.login(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Email</FormLabel>
        <TextInputField 
          name="email"
          onChange={this.onInputChange}
          others={{
            style: styles.input,
            underlineColorAndroid: 'transparent',
          }}
        />
        <FormLabel>Password</FormLabel>
        <TextInputField 
          name="password"
          onChange={this.onInputChange}
          others={{
            secureTextEntry: true,
            style: styles.input,
            underlineColorAndroid: 'transparent',
          }}
        />
        <View style={styles.indication}>
        {
          this.props.loginStatus.loading ? 
          <ActivityIndicator size="small" color="#992323" />
          :
          <Button 
            onPress={this.onButtonClick}
            color='#992323'
            title="Login"
          />
        }
        </View>
        {
          this.props.loginStatus.success && <Text style={styles.message}>LOGGED IN SUCCESSFULLY!!</Text>
        }
        {
          this.props.loginStatus.error && <Text style={styles.message}>{this.props.loginStatus.error}</Text>
        }
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: "50%",
    fontFamily: "Roboto",
    borderColor: '#992323',
    borderWidth: 1,
    marginRight: 5,
    marginLeft: 5,
    paddingRight: 5,
    paddingLeft: 5,
  },
  indication: {
    paddingTop: 10,
  },
  message: {
    marginTop: 5,
    fontSize: 11,
    color: "#991515",
  }
});

function mapStateToProps(state){
  return {
    loginStatus : state.login,
  }; 
}

function mapDispatchToProps(dispatch){
  return {
    login: (data) => { 
      login(data, dispatch);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
