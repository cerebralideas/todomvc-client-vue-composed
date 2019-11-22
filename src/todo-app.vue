<script>
	import todoForm from './todo-form.vue';
	import todoItem from './todo-item.vue';

	export default {
		components: {
			todoForm,
			todoItem
		},
		props: {
			todos: Array
		}
	};
</script>

<template>
	<div>
		<todo-form v-on="$listeners"></todo-form>
		<ul>
			<todo-item
				v-for="todo in todos"
				v-bind:todo="todo"
				v-on="$listeners"
				:key="todo.id">
			</todo-item>
		</ul>
	</div>
</template>
