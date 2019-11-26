<script>
	import { mapActions } from 'redux-vuex';

	export default {
		props: { todo: Object },
		methods: mapActions('completeTodo', 'deleteTodo')
	};
</script>

<template>
	<li v-bind:class="todo.completed ? 'completed' : ''">
		<div class="view">
			<input
				class="toggle"
				v-bind:id="todo.id"
				type="checkbox"
				v-bind:checked="todo.completed"
				@change="completeTodo(todo.id)" />
			<label v-bind:for="todo.id">
				{{ todo.title }}
			</label>
			<button
				class="destroy"
				@click="deleteTodo(todo.id)">
				<span class="a11y-text">Delete todo</span>
			</button>
		</div>
	</li>
</template>
