import axios from 'axios';

const BASE_URL = "https://api.instantwebtools.net/v1/";

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
    },
    getPassengers: (page) => {
        return axios
            .get(BASE_URL + `passenger?page=${page}&size=10`)
            .then(response => {
                return Promise.resolve(response.data);
            })
            .catch(error => {
                return Promise.reject(error);
            });
    },
    getAllAirlines: () => {
        return axios
            .get(BASE_URL + 'airlines')
            .then(response => {
                return Promise.resolve(response.data);
            })
            .catch(error => {
                return Promise.reject(error);
            });
    },
    getAllAirlineById: (id) => {
        return axios
            .get(BASE_URL + `airlines/${id}`)
            .then(response => {
                return Promise.resolve(response.data);
            })
            .catch(error => {
                return Promise.reject(error);
            });
    }
}

export default API;