<template>
  <div class="min-h-screen bg-slate-900 text-white selection:bg-blue-500 selection:text-white overflow-hidden">
    <div class="p-18 text-center text-white">
<h1 class="text-lg font-medium "><span class="text-blue-500">Download</span> my CV to explore my skills and experience.</h1><br>
<button @click="btnCV" class="bg-blue-500 cursor-pointer font-medium text-white rounded-lg border-none px-6 py-3 text-center"><i class="fa-solid fa-download"></i>Download CV</button>
    </div>
  </div>
</template>
<script setup>
function btnCV(){
  alert("Sorry, my CV is not available at the moment. Please contact me via Fiverr")
}
</script>