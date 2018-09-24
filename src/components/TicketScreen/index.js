import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { fetchTickets } from '../../actions/TicketActions';
import Swiper from 'react-native-swiper';
import Card from './Card';

class App extends React.Component {

	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.fetchTickets(this.props.accessToken);
	}

	getNumberOfTickets = () => {
		var count = 0;
		for(var i=0; i<this.props.tickets.data.length; i++){
			count+=this.props.tickets.data[i].items.length;
		}
		return count;
	}

	render() {

		const mappedCards = this.props.tickets.data.map( (t, i) => <Card data={t} key={i} /> );

		return(
			<React.Fragment>
				{ this.props.tickets.loading && (
					<View style={styles.container}>
						<ActivityIndicator size="small" color="#992323" />
					</View>
				)}
				{ this.props.tickets.success &&
					<Swiper showButtons={true}>
						{ mappedCards }
					</Swiper>
				}
			</React.Fragment>
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

function mapStateToProps(state){
	return {
		accessToken: state.login.accessToken,
		tickets: state.tickets,
	}
}

function mapDispatchToProps(dispatch){
	return {
		fetchTickets: (accessToken) => {
			fetchTickets(accessToken, dispatch);
		},
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
