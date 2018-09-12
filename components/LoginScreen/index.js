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

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      email: '',
      error: '',
      loading: false,
      password: '',
      success: false,
    };
  }

  onInputChange = (key, input) => {
    var c = {};
    c[key] = input;
    this.setState(c);
   }

  onButtonClick = () => {
    this.setState({loading: true});
    axios({
      method: 'POST',
      url: 'https://6121502966.startcon.com/api/v1/login',
      timeout: 3000,
      data: {
        email: this.state.email,
        password: this.state.password,
      },
      headers: {
        Accept: 'application/json',
        'Content-Info': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    })
    .then( result => this.setState({loading: false, success: true, error: ''}) )
    .catch( error => this.setState({loading: false, success: false, error: error.response.status}));
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
          this.state.loading ? 
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
          this.state.success && <Text style={styles.message}>LOGGED IN SUCCESSFULLY!!</Text>
        }
        {
          this.state.error.length !== 0 && <Text style={styles.message}>EXITED WITH STATUS CODE: {this.state.error}</Text>
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

export default App;
