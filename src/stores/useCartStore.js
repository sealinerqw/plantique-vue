import { defineStore } from 'pinia'
import getStoreItems from "@/composables/getStoreItems"
import getSingleStoreItem from '@/composables/getSingleStoreItem'

export const useCartStore = defineStore('cartStore',{
	state: () =>({
		products: null,
	}),
	actions:{
		async getProducts(){
			this.products  = await getStoreItems()
		},

		async getSingleProduct(id){
			let singleProduct = await getSingleStoreItem(id)
			return singleProduct
		}
	}
})