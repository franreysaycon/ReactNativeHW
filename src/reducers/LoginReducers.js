import { LOGIN } from '../constants';

const INITIAL_STATE = {
    loading: false,
    success: false,
    error: null,
    accessToken: null,
};

export default function LoginReducer(state=INITIAL_STATE,action){
    switch(action.type){
        case LOGIN.pending:
            return {...state, loading: true, success: false, error: null, accessToken: null};
        case LOGIN.success:
            return {...state, loading: false, success: true, error: null, accessToken: action.payload};
        case LOGIN.failed:
            return {...state, loading: false, success: false, error: action.payload, accessToken: null};
        default:
            return state;
    }
}
