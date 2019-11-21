import Vue from 'vue';
import todosView from './todo-app.vue';

const todos = [
	'Hello, World!'
];

new Vue({
	components: {
		'todos-view': todosView
	},
	data: {
		todos
	},
	el: '#app',
	methods: {
		addTodo: function (todo) {
			console.log(todo);
			todos.push(todo);
		}
	},
	template: `
		<todos-view
			v-bind:todos="todos"
			v-on:submit-todo="addTodo">
		</todos-view>
	`
});
