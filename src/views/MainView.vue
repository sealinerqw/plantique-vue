<script setup>
import Main from '@/components/MainView/Main.vue';
  import Collection from '@/components/MainView/Collection.vue'; 
  import About from '@/components/MainView/About.vue';
</script>

<template>
  <Main />
  <About />
  <Collection />
</template>

<style scoped>
*:last-child{
  border-bottom-left-radius: 39px;
  border-bottom-right-radius: 39px;
}

a{
  color: inherit;
}




</style>