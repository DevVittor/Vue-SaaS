import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Inicio from './pages/Inicio.vue';
import Vagas from './pages/Vagas.vue';
import Contato from './pages/Contato.vue';
import Cadastrar from './pages/Cadastrar.vue';
import Acessar from './pages/Acessar.vue';
import Perfil from './pages/Profile.vue';
import Demo from './pages/Demo.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: "/",
            component: Inicio
        },
        {
            path: "/vagas",
            component: Vagas
        },
        {
            path: "/vagas/:id",
            component: Demo
        },
        {
            path: "/contato",
            component: Contato
        },
        {
            path: "/cadastrar",
            component: Cadastrar
        },
        {
            path: "/acessar",
            component: Acessar
        },
        {
            path: "/criar",
            component: Perfil
        },
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
