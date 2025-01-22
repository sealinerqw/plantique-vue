<script setup>
import { ref, watch } from 'vue';
const props = defineProps({
	product: Object
})

const quantity = ref(props.product.quantity)
const emit = defineEmits(['updateQuantity', 'removeFromCart'])

watch(() => {
  if (quantity.value !== props.product.quantity) {
    emit('updateQuantity', quantity.value);
  }
})

const increase = () =>{
	quantity.value++
}

const decrease = () =>{
	quantity.value--
}

</script>

<template>
<div class="cart_product">
	<img :src="props.product.imageURL" :alt="props.product.name" class="product_image">
	<div class="product_info">
		<div class="product_name">{{ props.product.name }}</div>
		<div class="product_price">{{ props.product.price }} Р</div>
	</div>
	<div class="product_controls">
		<button class="black decrease" @click="decrease()">-</button>
		<input type="number" v-model="quantity" class="controls_input" min="0">
		<button class="black increase" @click="increase()">+</button>
	</div>
	<div class="product_totalPrice">{{ props.product.price * quantity }} P</div>
	<button class="black remove" @click="emit('removeFromCart', props.product.id)">X</button>
</div>
</template>

<style scoped>
.cart_product{
	display: grid;
	grid-template-rows: 100%;
	grid-template-columns: 20% 20% 30% 20% 10%;
	align-items: center;
	justify-items: center;
	height: 100px;
	border-bottom: 2px solid rgb(136, 136, 136);
	padding: 10px;
}

.product_image{
	width: 100px;
}

.product_controls{
	display: flex;
	width: 300px;
}

.controls_input{
	color: black;
	display: flex;
	border: 1px solid black;
	border-left: 0;
	border-right: 0;
	width: 100px;
	text-align: center;
	caret-color: black;
}

.decrease{
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	transition: all 0.2s;
}

.decrease:hover{
	background-color: #d34343;
}

.increase{
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	transition: all 0.2s;
}

.increase:hover{
	background-color: #41b33d;
}

.remove{
	width: 70px;
}

.remove:hover{
	background-color: rgb(160, 0, 0);
	color: white;
}
</style>