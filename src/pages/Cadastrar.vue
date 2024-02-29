<script setup>
document.title = "AcompX - Cadastrar";
import axios from 'axios';
import { ref } from 'vue';

const email = ref("");
const password = ref("");

async function handleRegister(){

    const formData = {
        email: email.value,
        password: password.value
    }

    try {
        await axios.post(`http://localhost:8080/register`, formData);
        console.log(`Conta criada com sucesso!`)
    } catch (error) {
        console.log(`Deu um problema na hora de criar a conta ${error}`);
    }
}

</script>
<template>
    <h1>Cadastrar</h1>
    <form @submit.prevent="handleRegister">
        <input type="email" v-model="email" placeholder="New Email">
        <input type="password" v-model="password" placeholder="******">
        <input type="submit" value="Register">
    </form>
</template>
<style scoped></style>
