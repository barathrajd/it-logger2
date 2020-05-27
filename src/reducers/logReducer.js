import { GET_LOGS, SET_LOADING, LOGS_ERROR} from '../actions/types';

const initialState ={
    logs: null,
    current: null,
    loading: false,
    error:null
}

// Get logs from the server




export default(state = initialState,action) =>{
    switch (action.types) {
        case GET_LOGS:
            return{
                ...state,
                logs: action.payload,
                loading: false
            }
        case SET_LOADING:
            return{
                ...state,
                loading: true
            }
        case LOGS_ERROR:
            console.error(action.payload);
            return{
                ...state,
                error: action.payload
            }
            
        default:
            return state;
    }
}