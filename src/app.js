import Vue from 'vue';
import { configureStore } from '@reduxjs/toolkit';
import { connect, mapState, mapActions } from 'redux-vuex';

import { actions, reducer } from './store'
import todosView from './todo-app.vue';

const store = configureStore({
	reducer: {
		todos: reducer
	}
});

connect({
	Vue,
	store,
	actions
});

new Vue({
	components: {
		todosView
	},
	data: mapState('todos'),
	el: '#app',
	methods: mapActions('addTodo', 'completeTodo', 'deleteTodo'),
	template: `
		<todos-view
			v-bind:todos="todos"
			v-on:submit-todo="addTodo"
			v-on:complete-todo="completeTodo"
			v-on:delete-todo="deleteTodo">
		</todos-view>
	`
});
