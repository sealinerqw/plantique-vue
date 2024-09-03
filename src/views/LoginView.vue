<script setup>

</script>

<template>
  <div class="login_container">
    <h2>Login</h2>
    <form>
      <div class="login_input">
        <p>E-mail:</p>
        <input type="email" for="email" required>
      </div>
      <div class="login_input">
        <p>Password:</p>
        <input type="password" for="username" required>
      </div>
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
    height: 87vh;
  }

  h2{
    margin-top: 30px;
    margin-bottom: 5rem;
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

  .login_register{
    font-size: 18px;
    text-align: center;
  }
  .login_register p{
    margin-bottom: 20px;
  }
</style>