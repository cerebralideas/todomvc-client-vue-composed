<script>
	import { mapActions } from 'redux-vuex';

	export default {
		props: {
			todo: Object
		},
		methods: mapActions('completeTodo', 'deleteTodo')
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
