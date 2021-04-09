import { GET_ARTISTS_REQUEST, GET_ARTIST_EVENTS_REQUEST } from '../constants/action-types'

export function getArtist(payload) {
    return { type: GET_ARTISTS_REQUEST, payload };
}
export function getArtistEvents(payload) {
    return { type: GET_ARTIST_EVENTS_REQUEST, payload };
}