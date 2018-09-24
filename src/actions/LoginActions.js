import axios from 'axios';
import { LOGIN } from '../constants';

function loginPending(){

	return {
		type: LOGIN.pending,
	}
};

function loginSuccess(accessToken){
	return {
		type: LOGIN.success,
		payload: accessToken,
	}
};

function loginFailed(error){
	return {
		type: LOGIN.failed,
		payload: error,
	}
};

export function login(data, dispatch){

	const request = axios({
      method: 'POST',
      url: 'https://6121502966.startcon.com/api/v2/login',
      timeout: 3000,
      data: data,
      headers: {
        Accept: 'application/json',
        'Content-Info': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });

	dispatch(loginPending());
	request.then((result) => {
		dispatch(loginSuccess(result.data.access_token));
	})
    .catch((error) => {
    	dispatch(loginFailed(error.response.data.message));
    })
}
