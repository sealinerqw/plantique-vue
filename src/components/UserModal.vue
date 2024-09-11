<script setup>
import { useAuthStore } from '@/stores/useAuthStore';

const props = defineProps(['email', 'uid'])

const authStore = useAuthStore()

</script>

<template>
  <div class="modal_contaier">
    <div class="modal_user">
      <h4 class="email">{{ email }}</h4>
      <p class="uid">UID: {{ uid }}</p>
    </div>
    <div class="modal_controls">
      <button><RouterView>Account details</RouterView></button>
      <button @click="logout" class="logout">Log out</button>
    </div>
  </div>
</template>

<style scoped>
  .modal_contaier{
    background: var(--bg-white);
    width: 350px;
    border-radius: 24px;
    height: max-content;
    display: flex;
    flex-direction: column;
    padding: 5px;
    border: 2px solid black;
  }

  .modal_user{
    margin: 10px;
    text-align: right;
    border-bottom: 1px solid rgb(214, 214, 214);
  }

  .modal_user .email{
    margin: 10px 0 10px 0;
    font-size: 24px;
  }

  .modal_user .uid{
    font-size: 14px;
    margin-bottom: 10px;
    color: rgb(153, 153, 153);
  }

  .modal_controls{
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  button{
    width: 170px;
    height: 60px;
    border-radius: 60px;
    background: transparent;
    border: 1px solid black;
    color: black;
    font-weight: 400;
    transition: all 0.2s;
    font-size: 18px;
    font-family: 'Lufga Regular', sans-serif;
  }

  button:hover{
    background: black;
    color: white;
    border: 1px solid white;
  }

  button.logout:hover{
    background: crimson;
  }
  button:hover{
    background: black;
    color: white;
    border: 1px solid white;
  }
  

</style>