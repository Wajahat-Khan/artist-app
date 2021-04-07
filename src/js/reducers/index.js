import { GET_ARTISTS_REQUEST, GET_ARTISTS_SUCCESS, GET_ARTISTS_FAILURE} from '../constants/action-types';

const initialState = {
    artist:{},
    artist_events: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ARTISTS_REQUEST:
            return { ...state, artist: {}, artist_events:[] };
        case GET_ARTISTS_SUCCESS:
            return { ...state, artist: action.payload, artist_events:[] };
        case GET_ARTISTS_FAILURE:
            return { ...state, artist: {}, artist_events:[] }
        default:
            return state;
    }
}

export default rootReducer;