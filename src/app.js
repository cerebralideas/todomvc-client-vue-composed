import Vue from 'vue';
import { connect } from 'redux-vuex';

import todoApp from './app.vue';
import router from './router';
import stateMgmt from './state-mgmt';

/**
 * Initialize the store and state persistence
 */
const { store, filtersActions, todosActions } = stateMgmt();

/**
 * initializes up routing table
 * @param {Object} store
 * @param {Object} filtersActions
 */
router(store, filtersActions);

/**
 * Bind Redux using Redux-Vuex
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
	components: { todoApp },
	el: '#app',
	template: '<todo-app></todo-app>'
});
