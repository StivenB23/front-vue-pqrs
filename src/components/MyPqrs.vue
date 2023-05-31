<script setup>
import CarPqrs from './CarPqrs.vue';
import { ref, onMounted } from 'vue'
import { pqrsService } from "../services/pqrsService"
const servicePqrs = new pqrsService();
const pqrsData = servicePqrs.getPqrs();
onMounted(async () => {
    await servicePqrs.fetchAll();
})

</script>
<template>
        <h1>Pqrs</h1>
        <div class="containerCards">
            <CarPqrs v-for="(pqrs, index) in pqrsData" :key="index" :pqrs="pqrs" />
        </div>
</template>
<style scoped>
.containerCards {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
</style>