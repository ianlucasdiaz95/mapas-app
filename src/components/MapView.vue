<template>
  <div>
    <div v-if="!isUserlocationReady" class="loading-map d-flex justify-content-center align-items-center">
      <div class="text-center text-white">
        <h3>Espere por favor</h3>
        <span>Localizando...</span>
      </div>
    </div>

    <div v-show="isUserlocationReady" class="map-container" ref="mapElement">

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import mapboxgl from 'mapbox-gl';
import { usePlacesStore, useMapStore } from '@/composables'

//Data
const mapElement = ref<HTMLDivElement>();

const {
  userLocation,
  isUserlocationReady
} = usePlacesStore();

const {
  setMap
} = useMapStore();

//Lifecycle
onMounted( () => {
   if(isUserlocationReady) initMap();
});

//Methods
async function initMap(){
  if( !mapElement.value ) return;
  if( !userLocation.value ) return;

  //Bloqueo el hilo para evitar errores de carga del mapa
  await Promise.resolve();

  const map = new mapboxgl.Map({
    container: mapElement.value, // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [userLocation.value[0], userLocation.value[1]], // starting position [lng, lat]
    zoom: 12, // starting zoom
  });

  const userLocationPopup = new mapboxgl.Popup()
    .setLngLat( userLocation.value )
    .setHTML(`
      <h6 class="fw-bold">Estas acá</h6>
      <p class="m-0">Actualmente estás en</p>
      <p class="m-0">${userLocation.value}</p>
    `)

  const userLocationMarker = new mapboxgl.Marker()
    .setLngLat( userLocation.value )
    .setPopup( userLocationPopup )
    .addTo(map)

  setMap( map )

}

//Watchers

watch( isUserlocationReady, (newVal) => {
  if( newVal ){
    initMap()
  }
});



</script>

<style scoped>
.map-container{
  position: fixed;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;
  background-color: black;
}

.loading-map{
  position: fixed;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
}
</style>