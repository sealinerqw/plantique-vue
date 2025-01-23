<script setup>
import { computed, onMounted, ref } from 'vue';
import ProductCard from '@/components/StoreView/ProductCard.vue';
import ProductFilters from '@/components/StoreView/ProductFilters.vue';
import { useProductStore } from '@/stores/useProductStore.js';
import { useCartStore } from '@/stores/useCartStore';

const productStore = useProductStore()
const cartStore = useCartStore()

const productTags = ref([])
const isDataReady = ref(false)

const minPrice = ref(0)
const maxPrice = ref(55555)

const selectedProductTags = ref([])
const selectedMinPrice = ref(0)
const selectedMaxPrice = ref(55555)

const addToCart = (product) =>{
  cartStore.addToCart(product)
}

const updatePriceSelection = (newMin, newMax) =>{
  selectedMinPrice.value = newMin
  selectedMaxPrice.value = newMax
}

const filteredProducts = computed(() =>{
  return productStore.products?.filter(product => {
    const priceMatch = product.price >= selectedMinPrice.value && product.price <= selectedMaxPrice.value
    const tagsMatch = selectedProductTags.value.length === 0 || product.tags.split(',')
                      .some(tag => selectedProductTags.value.includes(tag.trim()))
    return priceMatch && tagsMatch
  }) || []
})

onMounted(async () => {
  if(!productStore.products){
    await productStore.getProducts()
  }

  minPrice.value = Math.min(...productStore.products.map((product) => product.price))
  maxPrice.value = Math.max(...productStore.products.map((product) => product.price))

  selectedMinPrice.value = minPrice.value
  selectedMaxPrice.value = maxPrice.value

  productStore.products.forEach((product) =>{
    product.tags.split(',').forEach((tag) =>{
      productTags.value.push(tag.trim())
    })
  })

  productTags.value = [...new Set(productTags.value)]
  console.log(`Min price: ${minPrice.value}, max price: ${maxPrice.value}`)
  isDataReady.value = true
})
</script>

<template>
  <div class="store_container" v-if="isDataReady">
    <h2>Store</h2>
    <div class="store_filters">
      <ProductFilters 
      :tags="productTags"
      :minPrice="minPrice"
      :maxPrice="maxPrice"
      @tagSelect="(selectedTags) => selectedProductTags = selectedTags"
      @priceSelect = "(minPrice, maxPrice) => updatePriceSelection(minPrice, maxPrice)"
      />
    </div>
    <div class="store_items">
      <ProductCard
        v-for="product in filteredProducts" 
        :key="product.id"
        :itemId="product.id" 
        :itemImage="product.imageURL" 
        :itemPrice="product.price" 
        :itemName="product.name" 
        :itemTags="product.tags"
        @addToCart="addToCart(product)"
      />
    </div>
  </div>
  <div class="store_container" v-else>Loading...</div>
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
  
  .store_items{
    padding: 30px;
    display: flex;  
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
  a{
    box-sizing: content-box;
  }
</style>