<script setup>
  const props = defineProps('itemId', 'itemImage', 'itemPrice', 'itemName')
</script>

<template>
  <div class="product__container">
    <div class="product_image"></div>
    <div class="product_info">
      <div class="product_name"></div>
      <div class="product_price"></div>
      <button><RouterView></RouterView></button>
    </div>
  </div>
</template>


<style scoped>
  
</style>