<script setup>
import { ref, watch } from 'vue';
import { authService } from '../services/authService';

const Service = new authService();
const email = ref('');
const password = ref('');
const error = ref({
    email: "",
    password: ""
})
watch(email, async (newValue, oldValue) => {
    if (newValue == "") {
        error.value.email = "El campo email no puede estar vacío"
    } else {
        error.value.email = ""
    }
}
)
watch(password, async (newValue, oldValue) => {
    if (newValue == "") {
        error.value.password = "El campo password no puede estar vacío"
    } else {
        error.value.password = ""
    }
}
)
function login() {
    if (email.value == "" && password.value == "") {
        error.value.email = "El campo email no puede estar vacío"
        error.value.password = "El campo password no puede estar vacío"
    }else{
        Service.login(email.value, password.value);
    }
}
</script>
<template>
    <div class="container-login">
        <div class="login">
            <h1>Iniciar Sesión</h1>
            <form>
                <div class="">
                    <input type="text" id="email" name="email" placeholder="Email" v-model="email">
                    <small class="error">{{ error.email }}</small>
                </div>
                <div class="">
                    <input type="password" id="password" name="password" placeholder="Password" v-model="password">
                    <small class="error">{{ error.password }}</small>
                </div>


                <button type="button" @click="login">Ingresar</button>

            </form>
        </div>
    </div>
</template>
<style scoped>
.error {
    color: rgb(247, 26, 26);
    /* font-weight: bold; */
}

button {
    border-radius: 8px;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    outline: none;
    border: none;
}

button:hover {
    background-color: #242424;
}

input {
    border: none;
    outline: none;
    background-color: transparent;
    border-bottom: 2px solid rgb(184, 195, 199);
    color: rgb(47, 47, 47);
    width: 100%;

    font-size: 1rem;
}

input:focus {
    border-bottom: 2px solid rgb(49, 178, 224);
    transition: 0.2s ease;
}

.container-login {
    background-image: url("../assets/img/image_people.jpg");
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login {
    border: 1px solid #ccc;
    width: 400px;
    background-color: rgb(255, 255, 255);
    text-align: center;
    padding: 30px;
    border-radius: 5px;
}

form>div {
    margin: 18px 0;
}
</style>