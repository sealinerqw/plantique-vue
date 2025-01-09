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
  <RouterLink :to="{name: 'storeitem', params: {id: itemId}}">
  <div class="product_container">
    <img class="product_image" :src="imageURL">
    <div class="product_info">
      <div class="product_text">
        <div class="product_name">{{ props.itemName }}</div>
      </div>
      <button class="black" @click.stop.prevent="">{{ props.itemPrice }} ₽</button>
    </div>
  </div>
  </RouterLink>
</template>


<style scoped>
  .product_container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background: var(--bg-white);
    border: 1px solid rgb(105, 105, 105);
    width: 250px;
    height: 450px;
    border-radius: calc(var(--default-radius) - 1rem);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.4);
    transition: all 0.2s;
  }

  .product_container:hover{
    transform: scale(1.025);
  }
  .product_image{
    border-top-left-radius: calc(var(--default-radius) - 1.5rem);
    border-top-right-radius: calc(var(--default-radius) - 1.5rem);
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  
  .product_info{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .product_text{
    text-align: left;
    text-wrap: wrap;
  }

  .product_name{
    font-size: 24px;
    margin-bottom: 0.5rem;
  }
  
  .product_price{
    font-size: 18px;
  }

  button{
    width: 7rem;
  }


</style>