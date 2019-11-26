<script>
	import todoHeader from './header.vue';
	import todoItem from './todos/todo-item.vue';
	import todoList from './todos/todo-list.vue'
	import todoFooter from './footer.vue';

	export default {
		components: {
			todoHeader,
			todoItem,
			todoList,
			todoFooter
		},
	};
</script>

<template>
	<main>
		<todo-header></todo-header>
		<todo-list></todo-list>
		<todo-footer></todo-footer>
	</main>
</template>
