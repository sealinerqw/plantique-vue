<script setup>
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../main"
import { ref } from 'vue';

const email = ref('')
const password = ref('')
const confirmpassword = ref('')

const signUp = () =>{
  createUserWithEmailAndPassword(auth, email, password)
  .then((credentials) => {
    console.log(credentials.user)
  })
  .catch((err) => {
    console.log(err.message)
  })
}
</script>

<template>
  <div class="signup_container">
    <h2>Sign up</h2>
    <form @submit.prevent="signUp">
      <div class="signup_input">
        <p>E-mail:</p>
        <input type="email" for="email" placeholder="E-mail" required v-model="email">
      </div>
      <div class="signup_input">
        <p>Password:</p>
        <input type="password" for="password" placeholder="Password" required v-model="password">
      </div>
      <div class="signup_input">
        <p>Confirm password:</p>
        <input type="password" for="confirm" placeholder="Confirm password" required v-model="confirmpassword">
        <p class="error" v-if="(confirmpassword != password) && (confirmpassword !='')">Your passwords do not match!</p>
      </div>
      <button type="submit">Sign up!</button>
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
</style>