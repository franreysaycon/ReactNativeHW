import axios from 'axios';
import { TICKET } from '../constants';

function fetchTicketsPending(){

	return {
		type: TICKET.pending,
	}
};

function fetchTicketsSuccess(data){
	return {
		type: TICKET.success,
		payload: data,
	}
};

function fetchTicketsFailed(error){
	return {
		type: TICKET.failed,
		payload: error,
	}
};

export function fetchTickets(accessToken, dispatch){

	console.log(accessToken);
	const request = axios({
      method: 'GET',
      url: 'https://6121502966.startcon.com/api/v2/dashboard/items',
      timeout: 3000,
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${accessToken}`,
      }
    });

	dispatch(fetchTicketsPending());
	request.then((result) => {
		dispatch(fetchTicketsSuccess(result.data));
	})
    .catch((error) => {
    	dispatch(fetchTicketsFailed(error.response.data.message));
    })
}
