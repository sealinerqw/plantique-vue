import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', {
	state: () => ({
		cart: []
	}),
	getters:{
		positionCount: (state) => state.cart.length,
		isEmpty: (state) => state.cart.length === 0,
		totalPrice: (state) => {
			if(state.cart.length > 0){
				return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
			}
			return 0;
		}
	},
	actions:{
		addToCart(product){
			const item = this.cart.find(item => item.id === product.id)

			if(item){
				item.quantity +=1
			}
			else{
				this.cart.push({...product, quantity: 1})
			}
		},

		removeFromCart(productID){
			this.cart = this.cart.filter((item) => item.id !== productID)
		},

		clearCart(){
			this.cart = []
		},

		updateQuantity(productID, quantity){
			const item = this.cart.find((item) => item.id === productID);

			if (item) {
			  item.quantity = quantity;
			
			  if (item.quantity <= 0) {
				this.removeFromCart(productID);
			  }
			}
		}
	},
	persist: true
})