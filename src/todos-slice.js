import { createSlice } from '@reduxjs/toolkit';
import uuid from 'uuid/v4';

export let initialTodos = [
	{
		id: 'f9c94d35-a6d6-4301-9596-76a5b9e2a484',
		title: 'Hello, World!',
		completed: 'true'
	}
];

const todosSlice = createSlice({
	name: 'todos',
	initialState: initialTodos,
	reducers: {
		addTodo: function (state, action) {
			/**
			 * We're just pushing to a copy of the state.
			 * Immer takes that copy and applies the diff to the
			 * real immutable data structure.
			 */
			state.push({
				title: action.payload,
				id: uuid(),
				completed: false
			});
		},
		completeTodo: function (state, action) {
			/**
			 * Grab the completed todo and mutate that item.
			 * Immer allows for this kind of mutation, even though
			 * it uses immutable data structures under the hood.
			 */
			let todo = state.find((item) => action.payload === item.id);
			todo.completed = !todo.completed;
		},
		deleteTodo: function (state, action) {
			return state.filter((item) => item.id !== action.payload);
		},
		toggleAll: function (state, action) {
			const areAllMarked = state.every((todo)  => todo.completed);
			return state.map(
				(todo) =>
					Object.assign({}, todo, {
						completed: !areAllMarked
					})
			);
		},
		clearCompleted: function (state, action) {
			return state.filter((item) => !item.completed);
		}
	}
});

export const todosActions = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
