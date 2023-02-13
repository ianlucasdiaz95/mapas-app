<template>
  <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
    <h5>Cargando...</h5>
    <span>Espere por favor</span>
  </div>
  <ul v-else-if="places.length > 0" class="list-group mt-3">
    <li 
      v-for="place in places" 
      :key="place.id"
      :class="{'active': place.id === activePlace}"
      @click="onPlaceClicked( place )"
      class="list-group-item list-group-item-action text-start">
      <p class="fw-bold mb-1">{{ place.text_es }}</p>
      <p class="m-0" style="font-size: 12px;">{{place.properties.address}} {{place.context[0].text}} {{place.context[1].text}} {{place.context[3]?.text}}</p>
      <button @click.self="onDirectionsClicked( place )" :class="place.id === activePlace ? 'btn-outline-light' : 'btn-outline-primary'" class="btn mt-2 btn-sm btn-outline-primary" >Direcciones</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useMapStore, usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/places";

const {
  isLoadingPlaces,
  places,
  userLocation
} = usePlacesStore();

const {
  map,
  setPlacesMarkers,
  getRouteBetweenPoints
} = useMapStore();

const activePlace = ref('');

watch( places, (newPlaces) => {
  activePlace.value = '';
  setPlacesMarkers(newPlaces)
})

function onDirectionsClicked( place:Feature ){
  
  if( !userLocation.value ) return;
  
  activePlace.value = place.id;
  const [ lng, lat ] = place.center
  const [ userLng, userLat ] = userLocation.value

  const start: [number, number] = [userLng, userLat];
  const end: [number, number] = [lng, lat];

  getRouteBetweenPoints( start, end )

  map.value?.flyTo({
    zoom: 14,
    center: [ lng, lat ]
  })
}

function onPlaceClicked( place:Feature ){
  
  activePlace.value = place.id;
  const [ lng, lat ] = place.center

  map.value?.flyTo({
    zoom: 14,
    center: [ lng, lat ]
  })
}


</script>

<style scoped lang="scss">
  li{
    cursor: pointer;
  }
</style>