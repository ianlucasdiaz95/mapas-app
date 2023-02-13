import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiaWFubHVjYXNkaWF6IiwiYSI6ImNsZGRqajRwNDA0YXIzbm5lM2cyMWZ4eWMifQ.EMVTzJ79ZIf7u4pbfPpBzg'
    }
})

export default searchApi