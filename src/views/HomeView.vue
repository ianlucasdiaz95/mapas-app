<template>
  <map-view />
  <my-location-btn />
  <search-bar />
  <trip-details />
</template>

<script setup lang="ts">
//Components
import MapView from '@/components/MapView.vue';
import MyLocationBtn from '@/components/MyLocationBtn.vue';
import SearchBar from '@/components/SearchBar.vue';
import TripDetails from '@/components/TripDetails.vue';

//Composables
import { usePlacesStore } from '@/composables';

usePlacesStore();

</script>
