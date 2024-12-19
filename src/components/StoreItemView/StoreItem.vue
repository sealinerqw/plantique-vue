<script setup>
import getSingleStoreItem from '@/composables/getSingleStoreItem.js'
import { ref, onMounted } from 'vue';

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
        <div class="item_tags">
          <div class="item_tag"  v-for="tag in itemTags">{{ tag }}</div>
        </div>
      </div>
      <div class="item_price">
        <span>{{ item.price }}</span>
        <button class="black">Add to cart!</button>
      </div>
    </div>
    <div class="loading" v-else>
    Loading...
    </div>
</template>

<style scoped>
  .storeItem_title{
    font-size: 48px;
  }

  .storeItem_item{
    display: flex;
    justify-content: center;
    gap: 40px;
    width: 100%;
    text-align: right;
    justify-content: space-between;
    margin-left: 60px;
    margin-right: 60px;
  }

  .item_details{
    min-width: 400px;
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
  .item_price{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 340px;
    height: 100%;
  }

  .item_price{
    font-size: 30px;
    font-weight: 900;
  }

  .item_tags{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-self: flex-end;
  }

  .item_tag{
    font-size: 16px;
    border: 1px solid rgb(92, 92, 92);
    border-radius: var(--default-radius);
    padding: 5px;
    background: #cacaca;
  }
</style>