<script>
	import { mapActions } from 'redux-vuex';

	export default {
		data: function () {
			return {
				newTodo: ''
			};
		},
		methods: mapActions({
			submitTodo: function ({ dispatch, actions }, newTodo) {
				dispatch(actions.addTodo(newTodo));
				this.newTodo = '';
			}
		})
	};
</script>

<template>
	<form name="todoForm" @submit.prevent="submitTodo(newTodo)">
		<label for="newTodo">New Todo</label>
		<input type="text" id="newTodo" v-model="newTodo" />
	</form>
</template>
