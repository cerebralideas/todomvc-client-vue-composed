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
			state.push({
				title: action.payload,
				id: uuid(),
				completed: false
			});
		},
		completeTodo: function (state, action) {
			let todo = state.find((item) => action.payload === item.id);
			todo.completed = !todo.completed;
		},
		deleteTodo: function (state, action) {
			return state.filter((item) => item.id !== action.payload);
		}
	}
});

export const todosActions = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
