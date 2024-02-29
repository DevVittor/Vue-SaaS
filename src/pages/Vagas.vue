<script setup>
document.title = "AcompX - Anúncios"
    import { RouterLink } from 'vue-router';
    import axios from 'axios';
    import {ref} from 'vue';
    const items = ref([]);
    axios.get("http://localhost:8080/profile")
    .then((res)=>{
        console.log(res.data.Profiles);
        items.value = res.data.Profiles;
    }).catch((error)=>{
        console.log(error);
    })
    const id = ref(1);
</script>
<template>
    <h1>Vagas</h1>
    <nav>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item }}
            </li>
        </ul>
    </nav>
    <RouterLink :to="`/anuncios/${id}`">
        <h1>Profile</h1>
    </RouterLink>
</template>
<style scoped></style>