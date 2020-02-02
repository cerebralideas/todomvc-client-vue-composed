import { configureStore } from '@reduxjs/toolkit';
import { todoActions, todoReducer } from './todos/todo-slice';
import { filterActions, filterReducer } from './filters/filters-slice';

/**
 * Expose the store globally, so that it can be imported
 */
export let store;
export let actions = {
    filterActions,
    todoActions
};

/**
 * @function init - initializes the store along with state persistence.
 * Uses LocalStorage for data serialization.
 */
export async function initStore() {
    /**
     * @function persistentState
     */
    const previousState = async () => {
        let state;
        const response = await fetch('http://localhost:3000');
        try {
            state = response.json();
        } catch (err) {
            console.log(`JSON parse error: ${err}`);
        }
        return state;
    };

    /**
     * @function configureStore - Sets up store configuration
     * @param {Object} config
     * @param {Object} config.reducer - alias to createStore's root reducer
     *   The object constructed here reflects the shape of the state tree
     */
    store = configureStore({
        preloadedState: await previousState(),
        reducer: {
            todos: todoReducer,
            filter: filterReducer
        }
    });

    store.subscribe(function() {
        const state = store.getState();
        localStorage.setItem('state', JSON.stringify(state));
    });

    return {
        store,
        filterActions,
        todoActions
    };
}
