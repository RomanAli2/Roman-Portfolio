<template>
<nav class="bg-slate-900 w-full h-16 items-center shadow-md shadow-black backdrop-blur-md p-2.5 fixed top-0 left-0 z-50">
  <div class="container items-center flex justify-between flex-wrap mx-auto">
    <div class="nav-logo flex items-center">
      <span class="bg-blue-500/10 px-2 py-1.5 rounded-md hover:bg-blue-500/20">
        <i class="fa-solid fa-laptop-code text-2xl md:text-3xl text-blue-500"></i>
      </span>
      <span class="text-white text-xl font-bold ml-1 md:text-2xl px-1 py-1">
        ROMAN<span class="text-blue-500">ALI</span>
      </span>
    </div>

    <div class="all">
      <button class="block md:hidden" @click="troglebtn" aria-label="Toggle navigation menu">
        <span class="text-white hover:bg-blue-400/20 px-2 py-1.5 rounded-md">
          <i :class="isOpen ? 'fa-solid fa-bars text-xl' : 'fa-solid fa-xmark text-xl'"></i>
        </span>
      </button>
    </div>

    <div :class="[isOpen?'hidden':'flex',]" 
      class="links text-md mr-2 rounded-lg top-16 w-full left-0 absolute font-medium flex-col bg-slate-800/95 gap-2 p-4 md:flex-row md:flex md:bg-transparent md:relative md:top-0 md:w-auto md:gap-8 md:p-0">
      
      <RouterLink to="/" active-class="text-blue-500 border-b-2 border-blue-500" 
        class="text-white py-2 px-3 rounded-md hover:bg-blue-500/10 hover:text-blue-500 transition-colors md:hover:bg-transparent md:py-0 md:px-0 flex items-center">
        <i class="fa-solid fa-house mr-2 md:mr-0"></i> 
        <span class="md:hidden">Home</span>
        <span class="hidden md:block">Home</span>
      </RouterLink>

      <RouterLink to="/Project-page" active-class="text-blue-500 border-b-2 border-blue-500" 
        class="text-white py-2 px-3 rounded-md hover:bg-blue-500/10 hover:text-blue-500 transition-colors md:hover:bg-transparent md:py-0 md:px-0 flex items-center">
        <i class="fa-solid fa-mobile-screen mr-2 md:mr-0"></i>
        <span class="md:hidden">My Project</span>
        <span class="hidden md:block">My Project</span>
      </RouterLink>

      <RouterLink to="/About-Page" active-class="text-blue-500 border-b-2 border-blue-500" 
        class="text-white py-2 px-3 rounded-md hover:bg-blue-500/10 hover:text-blue-500 transition-colors md:hover:bg-transparent md:py-0 md:px-0 flex items-center">
        <i class="fa-solid fa-circle-info mr-2 md:mr-0"></i>
        <span class="md:hidden">About</span>
        <span class="hidden md:block">About</span>
      </RouterLink>

      <RouterLink to="/Resume-page" active-class="text-blue-500 border-b-2 border-blue-500" 
        class="text-white py-2 px-3 rounded-md hover:bg-blue-500/10 hover:text-blue-500 transition-colors md:hover:bg-transparent md:py-0 md:px-0 flex items-center">
        <i class="fa-solid fa-file-lines mr-2 md:mr-0"></i>
        <span class="md:hidden">Resume</span>
        <span class="hidden md:block">Resume</span>
      </RouterLink>
    </div>
  </div>
</nav>
</template>

<script setup>
import { ref } from 'vue';
const isOpen = ref(true)
function troglebtn(){
  isOpen.value = !isOpen.value
}
</script>