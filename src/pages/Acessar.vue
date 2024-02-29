<script setup>
    document.title = "AcompX - Acessar"
    import axios from 'axios';
    import {ref} from 'vue';

    const email = ref("");
    const password = ref("");

    async function handleLogin(){

        const formData = {
            email: email.value,
            password: password.value
        }

        try {
            await axios.post("http://localhost:8080/login",formData);
            console.log(`O login foi feito com sucesso!`);
        } catch (error) {
            console.log(`Deu error na hora de fazer login.${error}`);
        }

    }


</script>
<template>
    <h1>Acessar</h1>
    <form @submit.prevent="handleLogin">
        <input type="email" v-model="email" id="" placeholder="Seu email">
        <input type="password" v-model="password" id="" placeholder="Sua senha">
        <input type="submit" value="Login">
    </form>
</template>
<style scoped></style>