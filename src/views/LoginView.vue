<script setup>
  import { ref, computed } from "vue";
  import { useAuthStore } from "@/stores/useAuthStore";
  const email = ref('')
  const password = ref('')
  const authStore = useAuthStore()
  const error = computed(() => authStore.error)
  async function login() {
    await authStore.login(email.value, password.value)
  }
</script>

<template>
  <div class="login_container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="login_input">
        <p>E-mail:</p>
        <input type="email" for="email" placeholder="E-mail" required v-model="email">
      </div>
      <div class="login_input">
        <p>Password:</p>
        <input type="password" for="username" placeholder="Password" required v-model="password">
      </div>
      <p class="error" v-if="error">{{ error }}</p>
      <button type="submit">Log in</button>
      <div class="login_register">
        <p>Don't have an account?</p>
        <button>
          <RouterLink to="/signup">Sign up here!</RouterLink>
        </button>
      </div>
    </form>
  </div>
</template>


<style scoped>
  .login_container{
    display: flex;
    flex-direction: column;
    align-items: center;
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

  .login_input{
    text-align: left;
    width: 100%;
  }

  .login_input p{
    margin-bottom: 15px;
    font-size: 28px;
    font-family: 'Lufga SemiBold', sans-serif;
  }

  .login_input input{
    border: 0;
    background: transparent;
    border-bottom: 2px solid var(--bg-white);
    width: 100%;
    color: white;
    font-size: 24px;
    caret-color: white;
    font-family: 'Lufga Regular', sans-serif;
  }

  button:hover{
    background: var(--bg-white);
    color: black;
  }

  .login_register{
    font-size: 18px;
    text-align: center;
  }
  .login_register p{
    margin-bottom: 20px;
  }

  .error{
    color: crimson;
  }
</style>