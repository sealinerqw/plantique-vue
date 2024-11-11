<script setup>
    
</script>

<template>
  <div class="container">
    <h2>Whoops, wrong way!</h2>
    <p>This page doesn`t exist!  </p>
    <button><RouterLink to="/">Return to home</RouterLink></button>
  </div>
</template>


<style scoped>
.container{
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 60px;
}

.container p{
  color: white;
  font-size: 24px;
}
</style>