<template>
  <div class="searchbar-container">
    <input 
        class="form-control"
        placeholder="Buscar lugares..."
        type="text" 
        name="" 
        id=""
        v-model="searchTerm"
    />
    <search-results />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { usePlacesStore } from '@/composables';
import SearchResults from '@/components/SearchResults.vue'

const debounceTimeout = ref();
const debouncedValue = ref('');

const { searchPlacesByTerm } = usePlacesStore();

const searchTerm = computed({
  get(){
    return debouncedValue.value;
  },
  set(val: string){

    if(debounceTimeout.value) clearTimeout( debounceTimeout.value );

    debounceTimeout.value = setTimeout(() => {
      debouncedValue.value = val
      searchPlacesByTerm(val);
    }, 500);

  }
})

</script>

<style scoped lang="scss">

.searchbar-container{
    position: fixed;
    background: #fff;
    top: 30px;
    left: 30px;
    z-index: 999;
    box-shadow: 0px 5px 7px rgba(0,0,0,0.16);
    width: 100%;
    max-width: 280px;
    border-radius: 5px;
    overflow: hidden;
    padding: 5px;


    li{
      cursor: pointer;
    }
}
</style>