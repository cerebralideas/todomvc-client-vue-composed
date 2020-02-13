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
     * @function previousState
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
     * @function reloadOnPath
     */
    const reloadOnPath = () => {
        switch (true) {
            case location.hash.includes('show_all'):
                return 'show_all';
            case location.hash.includes('show_active'):
                return 'show_active';
            case location.hash.includes('show_completed'):
                return 'show_completed';
            default:
                return '';
        }
    };

    /**
     * @function configureStore - Sets up store configuration
     * @param {Object} config
     * @param {Object} config.reducer - alias to createStore's root reducer
     *   The object constructed here reflects the shape of the state tree
     */
    store = configureStore({
        preloadedState: {
            filter: reloadOnPath(),
            todos: await previousState()
        },
        reducer: {
            filter: filterReducer,
            todos: todoReducer
        }
    });

    return {
        store,
        filterActions,
        todoActions
    };
}
