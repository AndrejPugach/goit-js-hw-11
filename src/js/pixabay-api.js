import Axios from "axios";

const axios = Axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
        key: '51836290-201bf47032d0cc7a32d21d0be',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    },
});


export function getImagesByQuery(query) {
    return axios
        .get('', {
            params: {
                q: query,
            }
        })
        .then(response => response.data)
}