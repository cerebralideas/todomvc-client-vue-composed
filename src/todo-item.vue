<script>
	export default {
		props: {
			todo: Object
		},
		methods: {
			completeTodo: function (todoId) {
				this.$emit('complete-todo', todoId);
			},
			deleteTodo: function (todoId) {
				this.$emit('delete-todo', todoId);
			}
		}
	};
</script>

<template>
	<li>
		<label>
			<input
				type="checkbox"
				v-bind:checked="todo.completed"
				@change="completeTodo(todo.id)" />
			{{ todo.title }}
			<button @click="deleteTodo(todo.id)">X</button>
		</label>
	</li>
</template>
