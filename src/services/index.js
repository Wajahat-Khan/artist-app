import axios from 'axios';

const BASE_URL = "https://rest.bandsintown.com/artists/";

const API = {
    getArtists: (searchText) => {
        let config = {
            app_id:1
          };
        return axios
            .get(BASE_URL + `${searchText}`, config)
            .then(response => {
                return Promise.resolve(response.data);
            })
            .catch(error => {
                return Promise.reject(error);
            });
    },
}

export default API;