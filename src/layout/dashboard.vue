<script setup>
import { authService } from '../services/authService';

const Service = new authService();
const user = JSON.parse(localStorage.getItem("user"));
</script>
<template>
    <div class="dashboard">
        <section class="navbar">
            <h3>NAVEGAR</h3>
            <router-link :to="{'name':'dashboard'}">Perfil</router-link>
            <router-link v-if="user.role == 'admin'" to="listpqrs">Listar PQRS</router-link>
            <a href="" @click="Service.logout">Logout</a>
        </section>
        <div class="contentDashboard">
            <router-view></router-view>
        </div>
    </div>
</template>
<style scoped>
.dashboard {
    width: 100%;
    display: flex;
}

.navbar {
    width: 250px;
    height: 100vh;
    background-color: rgb(61, 61, 61);
}
.contentDashboard{
    padding: 10px;
    width: 100%;
    background: #f3f3f3;
}
.navbar h3 {
    color: #fff;
    text-align: center;
}

.navbar a {
    display: block;
    color: #fff;
    padding: 10px;
}

a:hover {
    background-color: rgb(183, 183, 183);
}</style>