<script setup>
import ProductCard from '@/components/StoreView/ProductCard.vue';
import getStoreItems from '../composables/getStoreItems.js'

const products = getStoreItems()

console.log(products)
</script>

<template>
  <div class="store_container">
    <h2>Store</h2>
    <div class="store_filters">
      todo: filters here
    </div>
    <div class="store_items">
      <ProductCard/>
    </div>
  </div>
</template>

<style scoped>
  .store_container{
    margin-top: 10px;
    border: 1px solid var(--bg-white);
    background: var(--bg-white);
    border-top-left-radius: var(--default-radius);
    border-top-right-radius: var(--default-radius);
    text-align: center;
    height: max-content;
  }
  h2{
    color: black;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .store_filters{
    width: 200px;
    height: 100px;
    background: gray;
    width: 100%;
  }
  .store_items{
    padding: 20px;
    display: flex;  
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .placeholder{
    height: 400px;
    width: 300px;
    border-radius: var(--default-radius);
    background-color: gray;
    text-align: center;
    margin: 10px;
  }
</style>