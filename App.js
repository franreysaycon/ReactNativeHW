import React from 'react';
import { 
  Button,
  StyleSheet, 
  Text,
  View,
} from 'react-native';
import { FormLabel } from 'react-native-elements';
import TextInputField from './components/TextInputField';

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
    fetch('https://6121502966.startcon.com/api/v1/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          email: 'yourValue',
          password: 'yourOtherValue',
        }
      ),
    })
    .then( (response) => {
      if(response.status == 200){
        this.setState({success: true, error: ''});
      }
      else{
        this.setState({error: response.status,success: false});
      }
    })
    .catch( (error) => console.log(error) );
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
