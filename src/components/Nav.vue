<script setup>
import { RouterLink } from 'vue-router';
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <header class="sticky top-0 z-50 bg-whitte border-b dark:bg-dark bg-white border-zinc-200 dark:border-zinc-800 ">
    <div class="flex items-center 2xl:justify-between 2xl:flex-nowrap justify-center flex-wrap px-[30px] py-[10px]">
      <div class="">
        <RouterLink to="/">
          <h1 class="text-4xl font-bold dark:text-white">Acomp<b class="text-red">X</b></h1>
        </RouterLink>
      </div>
      <div class="">
        <nav>
          <ul
            class="flex items-center 2xl:flex-nowrap flex-wrap 2xl:justify-normal justify-center gap-[8px] text-[14px] font-medium dark:text-white">
            <li>
              <RouterLink to="/">Início</RouterLink>
            </li>
            <li>
              <RouterLink to="/anuncios">Anúncios</RouterLink>
            </li>
            <li>
              <RouterLink to="/cadastrar">Cadastrar</RouterLink>
            </li>
            <li>
              <RouterLink to="/acessar">Acessar</RouterLink>
          </li>
          <li>
            <RouterLink to="/anunciar">Anúnciar</RouterLink>
          </li>
          <button class="dark:bg-white dark:text-black bg-dark text-white text-base px-3 rounded-sm"
            @click="toggleDark(!isDark)">{{ isDark ? "Light" : "Dark" }}</button>
        </ul>
      </nav>
    </div>
  </div>
</header></template>
