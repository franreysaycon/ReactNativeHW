import React from 'react';
import { FormValidationMessage } from 'react-native-elements';
import { TextInput } from 'react-native';

class TextInputField extends React.Component {

	onChange = (text) => {
		this.props.onChange(this.props.name, text);
	}

	render() {
	    return (
	     	<React.Fragment>
	     		<TextInput onChangeText={this.onChange} {...this.props.others}/>
	     		{ this.props.error && <FormValidationMessage>{this.props.error}</FormValidationMessage>}
	     	</React.Fragment>
	    );
  	}
}

export default TextInputField;
