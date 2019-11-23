<script>
	export default {
		data: function () {
			return {
				newTodo: ''
			};
		},
		methods: {
			submitTodo: function (todo) {
				console.log(todo);
				this.$emit('submit-todo', todo);
				this.newTodo = '';
			}
		}
	};
</script>

<template>
	<form name="todoForm" @submit.prevent="submitTodo(newTodo)">
		<label for="newTodo">New Todo</label>
		<input type="text" id="newTodo" v-model="newTodo" />
	</form>
</template>
