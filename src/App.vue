<script setup>
import { onMounted } from 'vue';
import Header from './components/Header.vue';
import { useAuthStore } from './stores/useAuthStore';

const authStore = useAuthStore()

onMounted(() => {
  authStore.init()
})
</script>

<template>
  <Header />
  <RouterView />
</template>

<style scoped>

</style>
