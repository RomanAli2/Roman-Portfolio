<template>
  <HeaderSection/><br><br>
 <RouterView />
<footerSection/>
</template>
<script setup>
import HeaderSection from './components/header-section.vue';
import footerSection from './components/footer-section.vue';

</script>