<script setup>
import { useAuthStore } from '@/stores/useAuthStore';
import UserModal from './UserModal.vue';
import { computed, ref } from 'vue';

const authStore = useAuthStore()
const user = computed(() => authStore.user) 

let isToggled = ref(false)

const userToggle = (event) => {
  event.stopPropagation()
  isToggled.value = !isToggled.value
}

const closeUser = () =>{
  if(isToggled.value){
    isToggled.value = false
  }
}

</script>

<template>
  <div class="header">
    <div class="header_navcluster">
      <div class="navcluster_logo">
        <img src="../assets/img/header/logo.png" alt="logo">
      </div>
      <div class="navcluster_buttons">
        <!-- change to routerview when ready -->
        <button><RouterLink to="/">Home</RouterLink></button>
        <button><RouterLink to="/store">Store</RouterLink></button>
        <button><RouterLink to="/">Idk</RouterLink></button>
      </div>
    </div>
    <div class="navcluster_buttons">
      <div class="header_searchbar">
        <div class="searchbar_icon">
          <img src="../assets/img/header/search.png" alt="searchicon">
        </div>
      </div>
      <button v-if="!authStore.isLoggedIn"><RouterLink to="/login">Login</RouterLink></button>
      <button v-else style="width: 60px; display: flex; align-items: center; justify-content: center;" @click="userToggle"><img src="../assets/img/header/person.png" alt="" class="icon"></button>
    </div>
    <transition name="modal-fade">
      <div class="user_info" v-if='isToggled' v-click-outside="closeUser">
        <UserModal :email="user.email" :uid ="user.id" @clickOutside = 'closeUser'/>
      </div>
    </transition>
  </div>
</template>

<style scoped>
  .header{
    margin: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header_navcluster{
    display: flex;
    gap: 10px;
  }
  .navcluster_logo{
    width: 60px;
    height: 60px;
  }
  .navcluster_buttons{
    display: flex;
    gap: 5px;
  }
  .navcluster_buttons button{
    width: 170px;
    height: 60px;
    border-radius: 60px;
    background: transparent;
    border: 1px solid white;
    color: white;
    font-weight: 400;
    transition: all 0.2s;
    font-size: 18px;
    font-family: 'Lufga Regular', sans-serif;
  }

  .navcluster_buttons button:hover{
    background: white;
    color: black;
  }
  .navcluster_buttons button:focus{
    background: white;
    color: black;
  }

  .header_searchbar{
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 60px;
    border: 1px solid white;
    background: transparent;
  }

  /* .header_searchbar input{
    width: 320px;
    height: 20px;
    border: 0;
    margin-right: 20px;
    border-bottom: 1px solid white;
    background: transparent;
    caret-color: white;
  } */

  .searchbar_icon{
    width: 24px;
    height: 24px;
  }
  .icon{
    width: 24px;
    height: 24px;
  }
  .lkButton{
    width: 80px;
    height: 60px;
  }
  .user_info{
    position: fixed;
    right: 1rem;
    top: 6rem;
  }

  .modal-fade-enter-active, .modal-fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .modal-fade-enter-from, .modal-fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
</style>