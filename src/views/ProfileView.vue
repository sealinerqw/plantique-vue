<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router'
import { auth } from '@/main';

let user = sessionStorage.getItem('user')
const pfpURL = ref('')
const urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
const router = useRouter()
const defaultImage = "../assets/img/profile/userdefault.png"

if (user){
  user = JSON.parse(user)
} else
{
  router.push('/login')
}

const profilePicture = () =>{
  if(user.profilePicture){
    return user.profilePicture
  } else
  return defaultImage
}

console.log(profilePicture())
const updateUserImage = () =>{
  if(pfpURL != '' && urlRegex.test(pfpURL) == true){
    auth.currentUser.updateProfile({
      photoURL: pfpURL
    })
  } else alert('Empty new photo URL')
}

</script>

<template>
  <h2>Profile</h2>
  <div class="profile_container">
    <div class="profile_picture">
      <img :src='profilePicture()' alt="" :key="user.profilePicture">
      <input type="text" v-model="pfpURL">
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