import {
    GET_AIRLINES_REQUEST, GET_AIRLINES_SUCCESS, GET_AIRLINES_FAILURE,
    GET_AIRLINE_REQUEST, GET_AIRLINE_SUCCESS, GET_AIRLINE_FAILURE, CLEAR_AIRLINE
} from '../constants/action-types';

// initial state of store

const initialState = {

    allAirlines: [],
    airline: null,
    showModal: false
}

// main reducer function which on the basis of check update the initial state;

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_AIRLINE_REQUEST:
            return { ...state, airline: null, showModal:false };
        case GET_AIRLINE_SUCCESS:
            return { ...state, airline: action.payload, showModal:true };
        case GET_AIRLINE_FAILURE:
            return { ...state, artist: null, showModal:false }


        case GET_AIRLINES_REQUEST:
            return { ...state, allAirlines: [] };
        case GET_AIRLINES_SUCCESS:
            return { ...state, allAirlines: action.payload };
        case GET_AIRLINES_FAILURE:
            return { ...state, allAirlines: [] }

        case CLEAR_AIRLINE:
            return {...state, airline: null, showModal: false}

        default:
            return state;
    }
}

export default rootReducer;