import { combineReducers } from 'redux';
import LoginReducer from './LoginReducers';
import TicketReducer from './TicketReducers';

export default combineReducers({
	login: LoginReducer,
	tickets: TicketReducer,
})