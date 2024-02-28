<script setup>
  import { RouterLink } from 'vue-router';
  import { useDark, useToggle } from '@vueuse/core';
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
</script>

<template>
  <header class="sticky top-0 z-50 bg-whitte border-b dark:bg-dark border-zinc-200 dark:border-zinc-800 ">
    <div class="flex items-center justify-between px-[30px] py-[10px]">
      <div class="">
        <RouterLink to="/"><h1 class="text-4xl font-bold dark:text-white">ABRIME</h1></RouterLink>
      </div>
      <div class="">
        <nav>
          <ul class="flex items-center gap-[8px] text-[14px] font-medium dark:text-white">
            <li><RouterLink to="/">Início</RouterLink></li>
            <li><RouterLink to="/vagas">Vagas</RouterLink></li>
            <li><RouterLink to="/contato">Contato</RouterLink></li>
            <li><RouterLink to="/cadastrar">Cadastrar</RouterLink></li>
            <li><RouterLink to="/acessar">Acessar</RouterLink></li>
            <li><RouterLink to="/criar">Criar Perfil</RouterLink></li>
            <button class="dark:bg-white dark:text-black bg-black text-white text-base px-3 rounded-sm" @click="toggleDark(!isDark)">{{ isDark ? "Dark" : "Light" }}</button>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
