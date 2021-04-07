import { GET_ARTISTS_REQUEST, GET_ARTISTS_SUCCESS, GET_ARTISTS_FAILURE} from '../constants/action-types';
import API from '../../services/index';


function* getArtistsBySearch(action) {
    try {
        const artist = yield call(API.getArtists, action.payload.searchText);
        yield put({type: GET_ARTISTS_SUCCESS, payload: artist})
    }
    catch (error) {
        yield put({type: GET_ARTISTS_FAILURE})
    }
}

function* rootSaga() {
    yield takeEvery(GET_ARTISTS_REQUEST, getArtistsBySearch);
}

export default rootSaga;