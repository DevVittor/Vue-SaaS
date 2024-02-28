<script setup>
    import { Flame,ShieldCheck,PhoneCall,Fullscreen } from 'lucide-vue-next';
    import { Vue3Marquee } from 'vue3-marquee'
    const valores = Array.from({ length: 53 }, (_, i) => `serviços${i + 1}`);
    document.title = "ABRIME - Jéssica Gomes"
</script>
<template>
    <main>
        <section>
            <div class="flex justify-center items-center h-[93.6vh] w-[100%] p-[20px] dark:bg-dark">
                <div class="flex items-center justify-center gap-5 p-5 h-full w-full rounded-xl ">
                    <div class="h-full w-[400px] rounded-xl dark:bg-dark dark:shadow-card shadow-profile flex justify-between py-5 flex-col">
                        <div class="flex items-center justify-between flex-wrap px-3 w-full gap-2">
                            <div class="py-1 px-3 rounded-[3px] text-sm font-normal flex items-center gap-1 text-white bg-red-600">
                                <Flame />
                                <span>Perfil Destacado</span>
                            </div>
                            <div class="bg-blue-500 text-white py-1 px-3 rounded-[3px] text-sm font-normal flex items-center gap-1">
                                <ShieldCheck />
                                <span>Perfil Verificado</span>
                            </div>
                        </div>
                        <div class="flex flex-col px-3">
                            <h1 class="dark:text-white text-4xl font-bold">Jéssica Gomes</h1>
                            <h3 class="text-lg dark:text-zinc-200 text-zinc-700">São Paulo, SP</h3>
                        </div>
                        <div class="px-3">
                            <p class="text-base font-light leading-5 dark:text-zinc-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi possimus voluptate,
                            totam ipsum nemo at reprehenderit, autem tempora accusantium tenetur suscipit earum maiores
                            perferendis explicabo. Nisi praesentium modi omnis minima.</p>
                        </div>
                        <div class="w-full flex flex-col gap-2 px-3 dark:text-white">
                            <div class="w-full flex justify-between items-center px-3 border border-zinc-200 py-2 ">
                                <span>Gênero</span>
                                Mulher
                            </div>
                            <div class="w-full flex justify-between items-center px-3 border border-zinc-200 py-2 ">
                                <span>Etnia</span>
                                Branca
                            </div>
                            <div class="w-full flex justify-between items-center px-3 border border-zinc-200 py-2 ">
                                <span>Idade</span>
                                24 anos
                            </div>
                            <div class="w-full flex justify-between items-center px-3 border border-zinc-200 py-2 ">
                                <span>Altura</span>
                                1.73M
                            </div>
                            <div class="w-full flex justify-between items-center px-3 border border-zinc-200 py-2 ">
                                <span>Peso</span>
                                67Kg
                            </div>
                            <div class="w-full flex justify-between items-center px-3 border border-zinc-200 py-2 ">
                                <span>Corpo</span>
                                Sarado
                            </div>
                        </div>
                        <div class=" py-3 w-full flex justify-center items-center px-3">
                            <div class="flex justify-center items-center bg-white rounded-xl border border-zinc-300 flex-col gap-2 px-3 py-4">
                                <div class="flex items-end justify-center gap-2">
                                    <h2 class="font-bold text-5xl">R$ 350</h2>
                                    <h3 class="font-medium text-zinc-500 text-lg">Por Hora</h3>
                                </div>
                                <p class="text-center leading-4 text-zinc-900">Caso queira saber os valores de mais horas de serviço entre em contato com o anúnciante</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-center w-full px-3">
                            <h3 class="flex items-center gap-2 justify-center py-1 w-full dark:bg-white dark:text-black bg-black font-medium text-lg rounded-full text-white">
                                <PhoneCall class="h-5 w-5"/>
                                (21) 996732-123
                            </h3>
                        </div>
                    </div>

                    <div class="flex flex-col items-center justify-between gap-2.5 h-full max-w-[1450px] ">
                        <div class="grid  gap-2 grid-cols-3 bg-red-blue-500 w-full">
                            <div class="relative flex justify-center items-center h-[270px] w-full bg-red-500 rounded-xl group">
                                <img class=" h-full w-full object-cover rounded-xl" src="https://images.pexels.com/photos/3794248/pexels-photo-3794248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                                <Fullscreen class="absolute h-[50px] w-[50px] text-zinc-100 border border-zinc-200 rounded-xl cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                            </div>
                            <div class="relative flex justify-center items-center h-[270px] w-full bg-red-500 rounded-xl group">
                                <img class=" h-full w-full object-cover rounded-xl" src="https://images.pexels.com/photos/3813345/pexels-photo-3813345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                                <Fullscreen class="absolute h-[50px] w-[50px] text-zinc-100 border border-zinc-200 rounded-xl cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                            </div>
                            <div class="relative flex justify-center items-center h-[270px] w-full bg-red-500 rounded-xl group">
                                <img class=" h-full w-full object-cover rounded-xl" src="https://images.pexels.com/photos/1188982/pexels-photo-1188982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                                <Fullscreen class="absolute h-[50px] w-[50px] text-zinc-100 border border-zinc-200 rounded-xl cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                            </div>
                        </div>
                        <div class="w-full">
                            <Vue3Marquee
                            class="flex items-center py-1"
                            :duration="250"
                            :pause-on-hover="true"
                            :direction="'normal'"
                            >
                                <span class="mx-1 border dark:border-white dark:text-white border-zinc-400 px-3 py-1 hover:cursor-pointer" v-for="item in valores" :key="item.id">
                                    {{ item }}
                                </span>
                            </Vue3Marquee>
                        </div>
                        <div class="flex justify-center items-center h-full w-full">
                            <div class=" h-full w-full flex items-center justify-between gap-2 ">
                                <div class="h-full w-[80%] bg-blue-500 rounded-xl relative">
                                    <img class="absolute h-full w-full object-cover rounded-xl" src="https://t2.tudocdn.net/603541?w=1920" alt="">
                                    <div class="m-4 h-auto w-[300px] px-3 py-2 shadow-profile dark:bg-dark bg-white rounded-lg absolute flex flex-col gap-1 ">
                                        <div class="flex items-center gap-1 dark:text-white">
                                            <h3 class="font-semibold text-base">Rua:</h3>
                                            <span class="text-[14px] font-normal">Lorem ipsum dolor sit amet.</span>
                                        </div>
                                        <div class="flex items-center gap-1 dark:text-white">
                                            <h3 class="font-semibold text-base">Bairro:</h3>
                                            <span class="text-[14px] font-normal">Lorem ipsum dolor sit amet.</span>
                                        </div>
                                        <div class="flex items-center gap-1 dark:text-white">
                                            <h3 class="font-semibold text-base">CEP:</h3>
                                            <span class="text-[14px] font-normal">22354-310</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="h-[100%] w-[20%] bg-black rounded-xl">
                                    <img class="h-full w-full object-cover rounded-xl" src="https://images.pexels.com/photos/20359986/pexels-photo-20359986/free-photo-of-moda-tendencia-pessoas-mulher.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>


<style lang="css" scoped>
</style>