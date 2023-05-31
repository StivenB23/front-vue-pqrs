<script setup>
import { computed } from "vue"
const props = defineProps({
    pqrs: Object
})

const color = computed(() => {
    switch (props.pqrs.type) {
        case "petición":
            return "background-color:rgb(42, 165, 226)";
            break;
        case "queja":
            return "background-color:rgb(248, 184, 47)";
            break;
        case "reclamo":
            return "background-color:rgb(248, 47, 47)";
            break;
        case "sugerencia":
            return "background-color:rgb(42, 226, 97)";
            break;
        default:

            break;
    }
})

const dateFormat = computed(() => {
    return new Date(props.pqrs.date).toLocaleDateString('es', {})
})
</script>
<template>
    <div class="card">
        <div class="Cardhead" :style="color">
            <h3>{{ props.pqrs.type }}</h3>
        </div>
        <div class="cardBody">
            <small class="date">Fecha: {{ dateFormat }}</small>
            <p>Estado: {{ props.pqrs.state}}</p>
            <p class="description">{{ props.pqrs.description }}</p>
            <div class="">
                <p><b>Areas:</b></p>
                <ul>
                    <li v-for="(area, index) in props.pqrs.areas" :key="index" >{{ area }}</li>
                </ul>
            </div>
            <div v-if="props.pqrs.civilservant.lenght > 0">
                <ul>
                    <li v-for="(person, index) in props.pqrs.civilservant" :key="index" >{{ person }}</li>
                </ul>
            </div>
            <div>
                <button class="buttonFinish" type="button">Terminar Pqrs</button>
            </div>
        </div>
        <div class="cardFooter">
            <p>Realizado por {{ props.pqrs.user.fullname}}</p>
        </div>
    </div>
</template>
<style scoped>
.card {
    width: 20%;
    background: #fff;
    border-radius: 5px;
    margin: 10px 5px;
    box-shadow: 0px 4px 10px #cccecf;
}
.buttonFinish{
    background-color: #ff7777;
    border: none;
    font-size: 1rem;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
}
.Cardhead {
    padding: 9px;
    border-radius: 5px 5px 0 0;
    text-align: center;
    color: #fff;
}

.Cardhead h3 {
    margin: 0;
    text-transform: uppercase;
}

.cardBody {
    padding: 10px;
}

.cardFooter {
    border-top: 1px solid rgba(158, 189, 226, 0.615);
    padding: 2px 5px;
}

.date {
    font-size: 1rem;
}

.description {
    font-size: 14px;
    margin: 0;
}</style>