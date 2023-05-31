<script setup>
const user = JSON.parse(localStorage.getItem("user"));
</script>
<template>
        <div class="profile">
            <h1>PERFIL</h1>
            <p><b>Nombre:</b> {{ user.fullname }}</p>
            <p><b>Email:</b> {{ user.email }}</p>
            <p><b>Rol:</b> {{ user.role }}</p>
        </div>
</template>
<style scoped>
.profile{
    margin: 0px 20px;
}
</style>