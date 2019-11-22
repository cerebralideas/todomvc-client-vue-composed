import Vue from 'vue';
import todosView from './todo-app.vue';
import { todos, addTodo, completeTodo, deleteTodo } from './store';

new Vue({
	components: {
		todosView
	},
	data: {
		todos
	},
	el: '#app',
	methods: {
		addTodo,
		completeTodo,
		deleteTodo
	},
	template: `
		<todos-view
			v-bind:todos="todos"
			v-on:submit-todo="addTodo"
			v-on:complete-todo="completeTodo"
			v-on:delete-todo="deleteTodo">
		</todos-view>
	`
});
