import Vue from 'vue';
import { configureStore } from '@reduxjs/toolkit';
import { connect, mapState, mapActions } from 'redux-vuex';

import todosView from './todo-app.vue';
import router from './router';
import { todosActions, todosReducer } from './todos-slice';
import { filtersActions, filtersReducer } from './filters-slice';

const store = configureStore({
	reducer: {
		todos: todosReducer,
		filter: filtersReducer
	}
});

router(store, filtersActions);

connect({
	Vue,
	store,
	actions: todosActions
});

new Vue({
	components: {
		todosView
	},
	data: mapState('todos', 'filter'),
	el: '#app',
	methods: mapActions(
		'addTodo',
		'completeTodo',
		'deleteTodo'
	),
	template: `
		<todos-view
			v-bind:todos="todos"
			v-bind:filter="filter"
			v-on:submit-todo="addTodo"
			v-on:complete-todo="completeTodo"
			v-on:delete-todo="deleteTodo">
		</todos-view>
	`
});
