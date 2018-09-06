import React from 'react';
import { FormInput, FormValidationMessage } from 'react-native-elements';

class TextInputField extends React.Component {

	onChange = (text) => {
		this.props.onChange(this.props.name, text);
	}

	render() {
	    return (
	     	<React.Fragment>
	     		<FormInput onChangeText={this.onChange}/>
	     		{ this.props.error && <FormValidationMessage>{this.props.error}</FormValidationMessage>}
	     	</React.Fragment>
	    );
  	}
}

export default TextInputField;
