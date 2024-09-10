<script setup>
const props = defineProps(['email', 'uid'])
</script>

<template>
  <div class="modal_contaier">
    <div class="modal_user">
      <h4 class="email">{{ email }}</h4>
      <p class="uid">{{ uid }}</p>
    </div>
    <div class="modal_controls">
      <button><RouterView>Account details</RouterView></button>
      <button @click="logout">Log out</button>
    </div>
  </div>
</template>

<style scoped>
  .modal_contaier{
    position: relative;
    background: var(--bg-white);
    width: 350px;
    border-radius: 36px;
    height: 200px;
    display: flex;
    flex-direction: column;
    padding: 5px;
  }

  .modal_user{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>