import { GET_ARTISTS_REQUEST, GET_ARTISTS_SUCCESS, GET_ARTISTS_FAILURE,
GET_ARTIST_EVENTS_REQUEST, GET_ARTIST_EVENTS_SUCCESS, GET_ARTIST_EVENTS_FAILURE} from '../constants/action-types';
import API from '../../services/index';
import { call, takeEvery, put } from 'redux-saga/effects';


// generator function to fetch artist on base of search

function* getArtistsBySearch(action) {
    try {
        const artist = yield call(API.getArtists, action.payload);
        yield put({type: GET_ARTISTS_SUCCESS, payload: artist})
    }
    catch (error) {
        yield put({type: GET_ARTISTS_FAILURE})
    }
}

//generator function to fetch events of artist

function* getEvents(action) {
    try {
        const events = yield call(API.getArtistEvents, action.payload);
        yield put({type: GET_ARTIST_EVENTS_SUCCESS, payload: events})
    }
    catch (error) {
        yield put({type: GET_ARTIST_EVENTS_FAILURE})
    }
}

function* rootSaga() {
    yield takeEvery(GET_ARTISTS_REQUEST, getArtistsBySearch);
    yield takeEvery(GET_ARTIST_EVENTS_REQUEST, getEvents);
}

export default rootSaga;