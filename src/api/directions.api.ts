import axios from 'axios';

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiaWFubHVjYXNkaWF6IiwiYSI6ImNsZGRqajRwNDA0YXIzbm5lM2cyMWZ4eWMifQ.EMVTzJ79ZIf7u4pbfPpBzg'
    }
})

export default directionsApi