<script setup>
import { useAuthStore } from '@/stores/useAuthStore';
import { ref, onMounted, onUnmounted } from 'vue';
const props = defineProps(['email', 'uid'])

const emit = defineEmits(['clickOutside']);

const authStore = useAuthStore()

const logoutClick = () =>{
  authStore.logout()
  emit('clickOutside')
}

</script>

<template>
  <div class="modal_container" ref="modalRef">
    <div class="modal_user">
      <img :src="authStore.user.photoURL" alt="">
      <h4 class="email">{{ email }}</h4>
      <p class="uid">UID: {{ uid }}</p>
    </div>
    <div class="modal_controls">
      <button @click="emit('clickOutside')"><RouterLink :to="{name: 'profile'}">Account details</RouterLink></button>
      <button @click="logoutClick" class="logout">Log out</button>
    </div>
  </div>
</template>

<style scoped>
  .modal_container{
    background: var(--bg-white);
    width: 350px;
    border-radius: 24px;
    height: max-content;
    display: flex;
    flex-direction: column;
    padding: 5px;
    border: 2px solid rgb(0, 102, 116);
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
    border: 1px solid black;
    color: black;
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