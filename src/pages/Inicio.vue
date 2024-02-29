<script setup>
import { RouterLink } from 'vue-router';
import { Vue3Marquee } from 'vue3-marquee'
const valores = Array.from({ length: 10 }, (_, i) => ({
    img: `https://images.pexels.com/photos/19987953/pexels-photo-19987953/free-photo-of-estrada-via-natureza-floresta.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    alt: `Foto${i + 1}`
}));

document.title = "AcompX - Início";

</script>
<template>
    <main>
        <section>
            <div
                class="flex justify-center items-center flex-col 2xl:h-[93.6vh] h-auto 2xl:gap-5 gap-1 2xl:py-0 py-2.5 dark:bg-dark">
                <div class="flex items-center justify-center flex-col 2xl:gap-5 gap-3 ">
                    <h1 class="2xl:text-8xl text-5xl font-bold dark:text-white text-black">Acomp<b class="text-red">X</b>
                    </h1>
                    <p class="text-center font-medium text-base 2xl:w-[45%] px-3 leading-6 dark:text-zinc-300">Lorem ipsum,
                        dolor sit amet consectetur adipisicing elit. Quas deleniti in rerum tenetur repudiandae facere
                        laborum enim, illo delectus officia magnam reiciendis sed culpa quae, repellat voluptas dolore minus
                        soluta.</p>
                    <div class="flex items-center justify-center 2xl:gap-5 gap-2.5">
                        <RouterLink to="/cadastrar">
                            <button class="px-3 py-1 bg-dark text-white border border-zinc-200 font-bold">
                                Criar Conta
                            </button>
                        </RouterLink>
                        <RouterLink to="/anuncios">
                            <button class="px-3 py-1 bg-white border border-zinc-200 font-bold">
                                Ver Anúncios
                            </button>
                        </RouterLink>
                    </div>
                </div>
                <div class="w-full p-5">
                    <Vue3Marquee class="flex items-center py-1" :duration="80" :pause-on-hover="true" :direction="'normal'">
                        <div class="flex items-center gap-3 hover:cursor-pointer" v-for="(item, index) in valores"
                            :key="index">
                            <img class="h-[450px] mx-1 w-full" :src="item.img" :alt="item.alt" />
                        </div>
                    </Vue3Marquee>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="css" scoped></style>