<script setup>

</script>

<template>
  <div class="signup_container">
    <h2>Sign up</h2>
    <form>
      <div class="signup_input">
        <p>E-mail:</p>
        <input type="email" for="email" required>
      </div>
      <div class="signup_input">
        <p>Password:</p>
        <input type="password" for="username" required>
      </div>
      <div class="signup_input">
        <p>Confirm password:</p>
        <input type="password" for="username" required>
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
</style>