<script setup>
  const props = defineProps('itemId', 'itemImage', 'itemPrice', 'itemName')
</script>

<template>
  <div class="product__container">
    <div class="product_image" src=""></div>
    <div class="product_info">
      <div class="product_name">{{ itemName }}</div>
      <div class="product_price">{{ itemPrice }} ₽</div>
      <button><RouterView></RouterView></button>
    </div>
  </div>
</template>


<style scoped>
  
</style>