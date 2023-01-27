<template>
  <button v-if="isBtnReady" @click="onMyLocationClicked" class="btn btn-primary">
    Ir a mi ubicación
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMapStore, usePlacesStore } from '@/composables';

const { userLocation, isUserlocationReady } = usePlacesStore();
const { map, isMapReady } = useMapStore();

//Methods
function onMyLocationClicked(){
    map.value?.flyTo({
        center: userLocation.value!,
        zoom: 14
    })
}

const isBtnReady= computed(() => isUserlocationReady.value && isMapReady.value)

</script>

<style scoped>

button{
    position: fixed;
    top: 30px;
    right: 30px;
}

</style>