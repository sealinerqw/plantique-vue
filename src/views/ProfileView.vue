<script setup>
import { computed } from 'vue';
import { auth } from '@/main';
import { useAuthStore } from '@/stores/useAuthStore';

const authStore = useAuthStore()
const user = computed(() => authStore.user)

</script>

<template>
  <div class="profile_container">
    <h2>Profile</h2>
    <div class="profile_input">
      <p>E-mail: <span class="profile_data">{{ user.email }}</span></p>
    </div>
  </div>
</template>



<style scoped>
.profile_container{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.profile_input p{
  margin-bottom: 15px;
  font-size: 28px;
  color: white;
}

.profile_data{
  color: rgb(107, 235, 98)
}
</style>