import { TICKET } from '../constants';

const INITIAL_STATE = {
    loading: false,
    success: false,
    error: null,
    data: [],
};

export default function TicketReducer(state=INITIAL_STATE,action){
    switch(action.type){
        case TICKET.pending:
            return {...state, loading: true, success: false, error: null, data: []};
        case TICKET.success:
            return {...state, loading: false, success: true, error: null, data: action.payload};
        case TICKET.failed:
            return {...state, loading: false, success: false, error: action.payload, data: []};
        default:
            return state;
    }
}
