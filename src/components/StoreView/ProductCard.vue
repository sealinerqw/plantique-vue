<script setup>
  const props = defineProps({
  itemId: String,
  itemImage: String,
  itemPrice: Number,
  itemName: String
});

  let imageURL = props.itemImage
</script>

<template>
  <div class="product_container">
    <img class="product_image" :src="imageURL">
    <div class="product_info">
      <div class="product_text">
        <div class="product_name">{{ props.itemName }}</div>
        <div class="product_price">{{ props.itemPrice }} ₽</div>
      </div>
      <button><RouterView>Buy</RouterView></button>
    </div>
  </div>
</template>


<style scoped>
  .product_container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background: #424242;
    width: 300px;
    border-radius: calc(var(--default-radius) - 1rem);
  }
  .product_image{
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  
  .product_info{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .product_text{
    color: white;
  }
  .product_name{
    font-size: 24px;
    margin-bottom: 0.5rem;
  }

  button{
    width: 3.75rem;
  }


</style>