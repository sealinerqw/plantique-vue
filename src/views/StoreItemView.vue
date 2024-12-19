<script setup>
import StoreItem from '@/components/StoreItemView/StoreItem.vue';

const props = defineProps({
  id: Number
})
</script>

<template>
	<div class="storeItem_container">
    <StoreItem :id="id"></StoreItem>
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
</style>