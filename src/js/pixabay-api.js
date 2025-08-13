
import Axios from "axios";



const axios = Axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
        key: '51736098-e561806c369733f177830f298',
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