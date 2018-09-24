import React from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

const Card = (props) => {

	const tickets = props.data.items.map((t,i) => <Text style={styles.text} key={i}>{t.productName}</Text>);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{props.data.eventName}</Text>
			{ tickets }
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
	    alignItems: 'center',
	    backgroundColor: '#d3d3d3',
	    flex: 1,
	    justifyContent: 'center',
	},
	text: {
		color: '#000',
	},
});

export default Card;
