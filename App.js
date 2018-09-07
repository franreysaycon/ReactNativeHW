import React from 'react';
import { 
  Button,
  StyleSheet, 
  Text,
  View,
} from 'react-native';
import { FormLabel } from 'react-native-elements';
import TextInputField from './components/TextInputField';
import axios from 'axios';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      success: false,
      error: '',
    };
  }

  onInputChange = (key, input) => {
    var c = {};
    c[key] = input;
    this.setState(c);
   }

  onButtonClick = () => {
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
    .then( result => this.setState({success: true, error: ''}) )
    .catch( error => this.setState({success: false, error: error.response.status}));
  }

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Email</FormLabel>
        <TextInputField 
          name="email"
          onChange={this.onInputChange}
        />
        <FormLabel>Password</FormLabel>
        <TextInputField 
          name="password"
          onChange={this.onInputChange}
        />
        <Button 
          onPress={this.onButtonClick}
          color='#992323'
          title="Login"
        />
        {
          this.state.success && <Text>LOGGED IN SUCCESSFULLY!!</Text>
        }
        {
          this.state.error.length !== 0 && <Text>EXITED WITH STATUS CODE: {this.state.error}</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
