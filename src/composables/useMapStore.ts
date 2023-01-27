import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { StateInterface } from "@/store";
import mapboxgl from "mapbox-gl";

export const useMapStore = () => {

    const store = useStore<StateInterface>();

    onMounted(() => {
        //
    })

    return {
        //State
        map: computed( () => store.state.map.map ),
        distance: computed(() => store.state.map.distance),
        duration: computed(() => store.state.map.duration),

        //Getters
        isMapReady: computed<boolean>(() => store.getters['map/isMapReady']),

        //Mutations
        setMap: ( map: mapboxgl.Map ) => store.commit('map/setMap', map)
    }
}