<script setup>
import getSingleStoreItem from '@/composables/getSingleStoreItem.js'
import { ref, onMounted, computed } from 'vue';

const item = ref()
let itemTags = ref([])
const props = defineProps({
	id: Number
})

onMounted(async () =>{
	item.value = await getSingleStoreItem(props.id)
  if(item.value && item.value.tags){
    itemTags = item.value.tags.split(',').map(tag => tag.trim())
  }
  console.log(item.photoURL)
})

</script>

<template>
	<div class="storeItem_container">
    <div class="storeItem_item" v-if="item">
      <div class="item_image">
        <img :src="item.imageURL" :alt="item.name">
      </div>
      <div class="item_details">
        <div class="item_id">
          id: {{ item.id }}
        </div>
        <div class="item_name">
          {{ item.name }}
        </div>
        <div class="item_text">
          {{ item.details }}
        </div>
        <div class="item_price">
          {{ item.price }}
        </div>
        <div class="item_tags" v-for="tag in itemTags">
          <div class="item_tag">{{ tag }}</div>
        </div>
        <button class="black">Add to cart!</button>
      </div>
      
    </div>
    <div class="loading" v-else>
    Loading...
    </div>
	</div>
  
</template>

<style scoped>
	.storeItem_container{
    border: 1px solid var(--bg-white);
    background: var(--bg-white);
    border-top-left-radius: var(--default-radius);
    border-top-right-radius: var(--default-radius);
    height: fit-content;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .storeItem_item{
    display: flex;
    justify-content: center;
    gap: 40px;
    width: 100%;
    text-align: right;
  }
  .item_details{
    min-width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .item_image{
    width: 400px;
    height: 500px;
    border-radius: var(--default-radius);
    overflow: hidden;
    border: 4px solid black;
  }
  .item_image img{
    width: 100%;
    height: 100%;
  }
  .item_id{
    font-size: 14px;
    color: #919191;
  }

  .item_name{
    font-size: 48px;
    font-weight: 900;
    border-bottom: 2px solid #919191;
    margin-bottom: 10px;
  }
</style>