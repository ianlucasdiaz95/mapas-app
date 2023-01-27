import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiaWFubHVjYXNkaWF6IiwiYSI6ImNsZGRqajRwNDA0YXIzbm5lM2cyMWZ4eWMifQ.EMVTzJ79ZIf7u4pbfPpBzg';

if(!navigator.geolocation){
    alert('Tu navegador no soporta geolocation.');
    throw new Error('Tu navegador no soporta geolocation')
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
