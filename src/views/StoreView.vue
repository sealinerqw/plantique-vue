<script setup>
import { ref, onMounted } from 'vue';
import ProductCard from '@/components/StoreView/ProductCard.vue';
import getStoreItems from '../composables/getStoreItems.js';

const products = ref([])

onMounted(async () => {
  products.value = await getStoreItems()
});

</script>

<template>
  <div class="store_container">
    <h2>Store</h2>
    <div class="store_filters">
      todo: filters here
    </div>
    <div class="store_items" v-if="products">
      <ProductCard
        v-for="product in products" 
        :key="product.id"
        :itemId="product.id" 
        :itemImage="product.imageURL" 
        :itemPrice="product.price" 
        :itemName="product.name" 
      />
    </div>
    <div v-else>Loading...</div>
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
    height: fit-content;
    min-height: 100%;
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
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
</style>