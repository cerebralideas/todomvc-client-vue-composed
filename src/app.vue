<script>
	import todoNew from './todo-new.vue';
	import todoItem from './todo-item.vue';
	import todoList from './todo-list.vue'
	import todoFooter from './footer.vue';
	import toggleAll from './toggle-all.vue';

	export default {
		components: {
			todoNew,
			todoItem,
			todoList,
			todoFooter,
			toggleAll
		},
	};
</script>

<template>
	<div>
		<todo-new></todo-new>
		<toggle-all></toggle-all>
		<todo-list></todo-list>
		<todo-footer></todo-footer>
	</div>
</template>
