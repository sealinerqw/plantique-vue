<script setup>
import { ref, useTemplateRef } from 'vue';

const props = defineProps({
	tags: Array
})

const emit = defineEmits(['tagSelect', 'priceSelect'])

const selectedTags = ref([])
const tagRef = useTemplateRef('tag')
const selectTagHandler = (tag) =>{
	if(selectedTags.value.find((item) => item === tag)){
		selectedTags.value.splice(selectedTags.value.indexOf(tag), 1)
		console.log(`removed ${tag} from selected tags`)
	}
	else{
		selectedTags.value.push(tag)
		console.log(`added ${tag} to selected tags`)
	}
}

</script>

<template>
	<div class="filters_container">
		<div class="filters_tags">
			<div class="filters_tag" v-for="tag in props.tags" @click="selectTagHandler(tag)" ref="tag"> {{ tag }}</div>
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

	.filters_tags{
		border: 1px solid black;
		width: 300px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 5px;
	}

	.filters_tag{
		font-size: 16px;
		border: 1px solid rgb(92, 92, 92);
		border-radius: var(--default-radius);
		text-wrap: nowrap;
		padding: 5px;
		background: #cacaca;
	}
</style>