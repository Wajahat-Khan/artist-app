import axios from 'axios';

const BASE_URL = "https://rest.bandsintown.com/artists/";

const API = {
    getArtists: (searchText) => {
        return axios
            .get(BASE_URL + `${searchText}?app_id=1`)
            .then(response => {
                return Promise.resolve(response.data);
            })
            .catch(error => {
                return Promise.reject(error);
            });
    },
    getArtistEvents: (searchText) => {
        return axios
            .get(BASE_URL + `${searchText}/events?app_id=1`)
            .then(response => {
                return Promise.resolve(response.data);
            })
            .catch(error => {
                return Promise.reject(error);
            });
    }
}

export default API;