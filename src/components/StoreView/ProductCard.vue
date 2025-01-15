<script setup>
  const props = defineProps({
  itemId: String,
  itemImage: String,
  itemPrice: Number,
  itemName: String,
  itemTags: Array
});

const emits = defineEmits(['addToCart'])
const imageURL = props.itemImage

let tags = props.itemTags

if(tags){
  tags = tags.split(',').slice(0, 3)
}

</script>

<template>
  <RouterLink :to="{name: 'storeitem', params: {id: itemId}}">
  <div class="product_container">
    <img class="product_image" :src="imageURL">
    <div class="product_info">
      <div class="product_text">
        <div class="product_name">{{ props.itemName }}</div>
      </div>
      <div class="product_tags">
        <div class="product_tag" v-for="tag in tags">
          {{ tag }}
        </div>
      </div>
    </div>
    <button class="black" @click.stop.prevent="$emit('addToCart')">{{ props.itemPrice }} ₽</button>
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
    gap: 10px;
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
  }
  
  .product_info{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
  }

  .product_text{
    text-align: left;
    text-wrap: wrap;
  }

  .product_name{
    font-size: 24px;
  }
  
  .product_price{
    font-size: 18px;
  }

  .product_tags{
    width: 100%;
    display: flex;
    gap: 5px;
    justify-content: center;
  }

  .product_tag{
    font-size: 16px;
    border: 1px solid rgb(92, 92, 92);
    border-radius: var(--default-radius);
    text-wrap: nowrap;
    padding: 5px;
    background: #cacaca;
  }

</style>