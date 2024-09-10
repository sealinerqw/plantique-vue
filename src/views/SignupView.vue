<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/useAuthStore';

const authStore = useAuthStore()
const router = useRouter()
const email = ref('')
const password = ref('')
const confirmpassword = ref('')

const error = computed(() => authStore.error)

async function register(){
  await authStore.register(email.value, password.value)
}

// const signUp = () =>{
//   createUserWithEmailAndPassword(auth, email.value, password.value)
//   .then((credentials) => {
//     const user = credentials.user
//   })
//   .catch((err) => {
//     console.log(err.message)
//   })
// }
</script>

<template>
  <div class="signup_container">
    <h2>Sign up</h2>
    <form @submit.prevent="register">
      <div class="signup_input">
        <p>E-mail:</p>
        <input type="email" for="email" placeholder="E-mail" required v-model="email">
      </div>
      <div class="signup_input">
        <p>Password:</p>
        <input type="password" for="password" placeholder="Password" required v-model="password">
        <p class="error" v-if="(password !='') && (password.length < 6)">Password should be longer than 6 characters</p>
      </div>
      <div class="signup_input">
        <p>Confirm password:</p>
        <input type="password" for="confirm" placeholder="Confirm password" required v-model="confirmpassword">
        <p class="error" v-if="(confirmpassword != password) && (confirmpassword !='')">Your passwords do not match!</p>
      </div>
      <button type="submit" :disabled="(confirmpassword != password) || (password === '')">Sign up!</button>
      <p class="error" v-if="error">{{error}}</p>
      <div class="signup_register">
        <p>Already have an account?</p>
        <button>
          <RouterLink to="/login">Log in!</RouterLink>
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.signup_container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2{
    margin-top: 50px;
    margin-bottom: 1rem;
    color: white;
    font-size: 72px;
    font-weight: 700;
  }

  form{
    width: 25%;
    color: white;
    margin: 50px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 50px;
  }

  .signup_input{
    text-align: left;
    width: 100%;
  }

  .signup_input p{
    margin-bottom: 15px;
    font-size: 28px;
    font-family: 'Lufga SemiBold', sans-serif;
  }

  .signup_input input{
    border: 0;
    background: transparent;
    border-bottom: 2px solid var(--bg-white);
    width: 100%;
    color: white;
    font-size: 24px;
    caret-color: white;
    font-family: 'Lufga Regular', sans-serif;
  }

  button{
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

  button:disabled{
    border: 1px solid rgb(92, 92, 92);
    color: rgb(92, 92, 92);
  }
  button:disabled:hover{
    background: transparent;
    color: rgb(92, 92, 92);
  }

  button:hover{
    background: var(--bg-white);
    color: black;
  }

  .signup_register{
    font-size: 18px;
    text-align: center;
  }

  .signup_register p{
    margin-bottom: 20px;
  }

  .signup_input .error{
    margin-top: 5px;
    position: fixed;
    color: crimson;
    font-size: 14px;
  }
  .error{
    color: crimson;
  }
</style>