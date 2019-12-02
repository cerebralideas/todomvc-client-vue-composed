import { configureStore } from '@reduxjs/toolkit';
import { todoActions, todoReducer } from './todos/todo-slice';
import { filterActions, filterReducer } from './filters/filters-slice';

/**
 * @function init - initializes the store along with state persistence.
 * Uses LocalStorage for data serialization.
 */
export default function init() {
    /**
     * @function persistentState
     */
    const previousState = () => {
        let state;
        const stateString = localStorage.getItem('state');
        if (stateString) {
            try {
                state = JSON.parse(stateString);
            } catch (err) {
                console.log(`JSON parse error: ${err}`);
            }
        }
        return state;
    };

    /**
     * @function configureStore - Sets up store configuration
     * @param {Object} config
     * @param {Object} config.reducer - alias to createStore's root reducer
     *   The object constructed here reflects the shape of the state tree
     */
    const store = configureStore({
        preloadedState: previousState(),
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
