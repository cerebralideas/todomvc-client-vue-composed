import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: function(state, action) {
            /**
             * We're just pushing a new todo to a *copy* of the state.
             * Don't worry, Immer takes that copy and applies the diff to the
             * real immutable data structure.
             */
            state.unshift(action.payload);
        },
        completeTodo: function(state, action) {
            /**
             * Grab the completed todo and mutate that todo.
             * Immer allows for this kind of mutation, even though
             * it uses immutable data structures under the hood.
             */
            let todo = state.find((todo) => action.payload === todo._id);
            todo.completed = !todo.completed;
        },
        deleteTodo: function(state, action) {
            /**
             * You can also just return new state, like usual.
             */
            return state.filter((todo) => todo._id !== action.payload);
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
            return state.filter((todo) => !todo.completed);
        }
    }
});

export const todoActions = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
