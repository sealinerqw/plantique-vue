<script setup>
import { computed, onMounted } from 'vue';
import { useAuthStore } from '@/stores/useAuthStore';

const authStore = useAuthStore()

const user = authStore.user

</script>

<template>
  <h2>Profile</h2>
  <div class="profile_container">
    <div class="profile_picture">
      <img src='../assets/img/profile/userdefault.png' alt="">
      <div class="picture_controls">
        <button @click="updateUserImage">Update image</button>
        <button>Remove image</button>
      </div>
    </div>
    <div class="profile_inputs">
      <div class="profile_input">
        <p>E-mail: <span class="profile_data">{{ user.email }}</span></p>
      </div>
      <div class="profile_input">
        <p>Username: <span class="profile_data">{{ user.displayName || "Not set!"  }}</span></p>
      </div>
    </div>
  </div>
</template>



<style scoped>
*{
  text-align: center;
  margin: 0 auto;
}
h2{
  margin-bottom: 30px;
}
.profile_container{
  width: max-content;
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 10px;
}
.profile_inputs{
  display: flex;
  flex-direction: column;
}
.profile_input p{
  margin-bottom: 15px;
  font-size: 28px;
  color: white;
}

.profile_picture img{
  border-radius: 30px;
  height: 250px;
  width: 250px;
  object-fit: cover;
}
.picture_controls{
  margin: 10px;
  display: flex;
  gap: 10px;
}
.profile_data{
  color: rgb(107, 235, 98)
}
</style>