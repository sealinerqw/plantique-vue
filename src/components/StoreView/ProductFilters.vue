<script setup>
import { ref } from 'vue';

const props = defineProps({
	tags: Array,
	maxPrice: Number,
	minPrice: Number
})

const emit = defineEmits(['tagSelect', 'priceSelect'])

const selectedTags = ref([])
const minSelectedPrice = ref(props.minPrice)
const maxSelectedPrice = ref(props.maxPrice)


const selectTagHandler = (tag) =>{
	if(selectedTags.value.find((item) => item === tag)){
		selectedTags.value.splice(selectedTags.value.indexOf(tag), 1)
		emit('tagSelect', selectedTags)
		console.log(`removed ${tag} from selected tags`)
	}
	else{
		selectedTags.value.push(tag)
		emit('tagSelect', selectedTags)
		console.log(`added ${tag} to selected tags`)
	}
}

const priceChangeHandler = () =>{
	if (minSelectedPrice.value < props.minPrice) {
		minSelectedPrice.value = props.minPrice;
	} else if (minSelectedPrice.value > props.maxPrice) {
		minSelectedPrice.value = props.maxPrice;
	}


	if (maxSelectedPrice.value > props.maxPrice) {
		maxSelectedPrice.value = props.maxPrice;
	} else if (maxSelectedPrice.value < props.minPrice) {
		maxSelectedPrice.value = props.minPrice;
	}

	if (minSelectedPrice.value > maxSelectedPrice.value) {
		maxSelectedPrice.value = minSelectedPrice.value;
	}

	emit('priceSelect', minSelectedPrice, maxSelectedPrice);
}

</script>

<template>
	<div class="filters_container">
		<div class="filters_tagSelector">
			<h4>Tags:</h4>
			<div class="tagSelector_tags">
				<div class="tagSelector_tag" v-for="tag in props.tags" @click="selectTagHandler(tag)"> {{ tag }} </div>
			</div>
		</div>
		<div class="filters_priceSelector">
			<h4>Price:</h4>
			From:
			<div class="priceSelector_input">
				<input type="number" :min="props.minPrice" :max="props.maxPrice" class="priceSelector_input" v-model="minSelectedPrice" @change="priceChangeHandler()">
			</div>
			To:
			<div class="priceSelector_input">
				<input type="number" :min="props.minPrice" :max="props.maxPrice" class="priceSelector_input" v-model="maxSelectedPrice" @change="priceChangeHandler()">
			</div>
		</div>
	</div>
</template>

<style scoped>
	.filters_container{
		border: 1px solid black;
		width: 100%;
		border-radius: var(--default-radius);
		min-height: 200px;
		padding: 30px;
		display: flex;
	}

	.filters_tagSelector{
		border: 1px solid black;
		width: 300px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 5px;
	}
	h4{
		font-weight: 700;
		font-size: 36px;
	}
	.tagSelector_tags{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}

	.tagSelector_tag{
		font-size: 16px;
		border: 1px solid rgb(92, 92, 92);
		border-radius: var(--default-radius);
		text-wrap: nowrap;
		padding: 5px;
		background: #cacaca;
	}

	.priceSelector_input{
		color: black;
		display: flex;
		border: 1px solid black;
		text-align: center;
		caret-color: black;
	}
</style>