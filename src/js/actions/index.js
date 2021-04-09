import { GET_ARTISTS_REQUEST, GET_ARTIST_EVENTS_REQUEST } from '../constants/action-types'

// action to get artist on base of search
export function getArtist(payload) {
    return { type: GET_ARTISTS_REQUEST, payload };
}

// action to get events of artist
export function getArtistEvents(payload) {
    return { type: GET_ARTIST_EVENTS_REQUEST, payload };
}