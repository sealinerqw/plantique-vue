<script setup>
import {useCartStore} from '../stores/useCartStore'
import CartItem from '../components/CartView/CartItem.vue'

const cartStore = useCartStore()

const updateQuantity = (productID, newQuantity) =>{
	cartStore.updateQuantity(productID, newQuantity)
}
</script>

<template>
	<div class="cart_container">
		<h2>Cart</h2>
		<div class="cart_products">
			<CartItem v-for="product in cartStore.cart" :key="cartStore.cart.id"
				:product="product"
				@updateQuantity="updateQuantity"
				@removeFromCart = "cartStore.removeFromCart(product.id)"
			>
			</CartItem>
		</div>
		<div class="cart_totals">
			<p class="totals_totalCount">Total positions count: {{ cartStore.positionCount }}</p>
			<p class="totals_totalPrice">Total price: {{ cartStore.totalPrice || 0 }}</p>
		</div>
		<button class="black" @click="cartStore.clearCart()">Clear</button>
	</div>
</template>	


<style scoped>
.cart_container{
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

.cart_products{
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 30px;
}
</style>