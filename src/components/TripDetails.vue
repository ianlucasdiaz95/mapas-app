<template>
    <div v-if="duration && distance" class="trip-container column">
        <div class="col">
            Distancia: <strong>{{distance}} kms</strong>
        </div>
        <div class="col">
            Duración: <strong>{{duration}} minutos</strong>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMapStore } from "@/composables";


const {
    distance,
    duration
} = useMapStore();

</script>

<style scoped>
    .trip-container{
        padding: 10px;
        position: fixed;
        bottom: 100px;
        left: 20px;
        border-radius: 10px;
        background: white;
        box-shadow: 0 10px 0 0 rgba(0, 0, 0, 0.2);
        width: 300px;
        font-size: 16px;
    }
</style>
