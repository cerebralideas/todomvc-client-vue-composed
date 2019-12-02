import { createSlice } from '@reduxjs/toolkit';
import uuid from 'uuid/v4';

export let initialTodos = [
    {
        id: 'f9c94d35-a6d6-4301-9596-76a5b9e2a484',
        title: 'Hello, World!',
        completed: 'true'
    }
];

const todoSlice = createSlice({
    name: 'todos',
    initialState: initialTodos,
    reducers: {
        addTodo: function(state, action) {
            /**
             * We're just pushing a new todo to a *copy* of the state.
             * Don't worry, Immer takes that copy and applies the diff to the
             * real immutable data structure.
             */
            state.push({
                title: action.payload,
                id: uuid(),
                completed: false
            });
        },
        completeTodo: function(state, action) {
            /**
             * Grab the completed todo and mutate that item.
             * Immer allows for this kind of mutation, even though
             * it uses immutable data structures under the hood.
             */
            let todo = state.find((item) => action.payload === item.id);
            todo.completed = !todo.completed;
        },
        deleteTodo: function(state, action) {
            /**
             * You can also just return new state, like usual.
             */
            return state.filter((item) => item.id !== action.payload);
        },
        toggleAll: function(state) {
            const areAllMarked = state.every((todo) => todo.completed);
            return state.map((todo) =>
                Object.assign({}, todo, {
                    completed: !areAllMarked
                })
            );
        },
        clearCompleted: function(state) {
            return state.filter((item) => !item.completed);
        }
    }
});

export const todoActions = todoSlice.actions;
export const todoReducer = todoSlice.reducer;