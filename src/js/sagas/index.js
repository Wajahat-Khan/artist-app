import {
    GET_AIRLINES_REQUEST, GET_AIRLINES_SUCCESS, GET_AIRLINES_FAILURE,
    GET_AIRLINE_REQUEST, GET_AIRLINE_SUCCESS, GET_AIRLINE_FAILURE
} from '../constants/action-types';
import API from '../../services/index';
import { call, takeEvery, put } from 'redux-saga/effects';

//generator function to fetch all airlines

function* getAllAirlines() {
    try {
        const airlines = yield call(API.getAllAirlines);
        yield put({ type: GET_AIRLINES_SUCCESS, payload: airlines })
    }
    catch (error) {
        yield put({ type: GET_AIRLINES_FAILURE })
    }
}

//generator function to fetch specific airline

function* getAirline(action) {
    try {
        const airline = yield call(API.getAllAirlineById, action.payload);
        yield put({ type: GET_AIRLINE_SUCCESS, payload: airline })
    }
    catch (error) {
        yield put({ type: GET_AIRLINE_FAILURE })
    }
}

function* rootSaga() {
    yield takeEvery(GET_AIRLINES_REQUEST, getAllAirlines);
    yield takeEvery(GET_AIRLINE_REQUEST, getAirline);


}

export default rootSaga;