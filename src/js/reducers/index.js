import { GET_ARTISTS_REQUEST, GET_ARTISTS_SUCCESS, GET_ARTISTS_FAILURE,
    GET_ARTIST_EVENTS_REQUEST, GET_ARTIST_EVENTS_SUCCESS, 
    GET_ARTIST_EVENTS_FAILURE} from '../constants/action-types';

// initial state of store

const initialState = {
    artist:{},
    artist_events: []
}

// main reducer function which on the basis of check update the initial state;

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ARTISTS_REQUEST:
            return { ...state, artist: {}, artist_events:[] };
        case GET_ARTISTS_SUCCESS:
            return { ...state, artist: action.payload, artist_events:[] };
        case GET_ARTISTS_FAILURE:
            return { ...state, artist: {}, artist_events:[] }
        case GET_ARTIST_EVENTS_REQUEST:
            return { ...state, artist_events:[] };
        case GET_ARTIST_EVENTS_SUCCESS:
            return { ...state, artist_events: action.payload};
        case GET_ARTIST_EVENTS_FAILURE:
            return { ...state, artist_events:[] }
        default:
            return state;
    }
}

export default rootReducer;