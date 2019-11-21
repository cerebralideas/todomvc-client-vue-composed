<script>
export default {
		data: function () {
			return {
				newTodo: ''
			};
		},
		methods: {
			submitTodo: function (todo) {
				console.log('child ' + todo);
				this.$emit('submit-todo', todo);
			}
		}
	};
</script>

<template>
	<form name="todoForm" @submit.prevent="submitTodo(newTodo)">
		<label for="newTodo">New Todo</label>
		<input type="text" id="newTodo" v-model="newTodo" />
	</form>
</template