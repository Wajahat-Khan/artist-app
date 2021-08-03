import { GET_AIRLINES_REQUEST, GET_AIRLINE_REQUEST, CLEAR_AIRLINE} from '../constants/action-types'

// action to get all airlines
export function getAllAirlines() {
    return { type: GET_AIRLINES_REQUEST };
}

// action to get specific airline
export function getAirline(payload) {
    return { type: GET_AIRLINE_REQUEST, payload };
}

// action to get specific airline
export function clearAirline() {
    return { type: CLEAR_AIRLINE };
}