import Vue from 'vue';
import { configureStore } from '@reduxjs/toolkit';
import { connect } from 'redux-vuex';

import todosView from './todo-app.vue';
import router from './router';
import { todosActions, todosReducer } from './todos-slice';
import { filtersActions, filtersReducer } from './filters-slice';

/**
 * @function configureStore - Sets up store configuration
 * @param {Object} config
 * @param {Object} config.reducer - alias to createStore's root reducer
 *   The object constructed here reflects the shape of the state tree
 */
const store = configureStore({
	reducer: {
		todos: todosReducer,
		filter: filtersReducer
	}
});

/**
 * @function router - initializes up routing table
 * @param {Object} store
 * @param {Object} filtersActions
 */
router(store, filtersActions);

/**
 * @function connect - this binds Vue with Redux
 */
connect({
	Vue,
	store,
	actions: todosActions
});

/**
 * Initialize Vue application and bind to the root element
 */
new Vue({
	components: { todosView },
	el: '#app',
	template: '<todos-view></todos-view>'
});
