import Vue from 'vue';
import { connect } from 'redux-vuex';

import todoApp from './app.vue';
import router from './router';
import { initStore } from './state-mgmt';

import 'todomvc-app-css/index.css';
import './app.css';

(async () => {
    /**
     * Initialize the store and state persistence
     */
    const { store, filterActions, todoActions } = await initStore();

    /**
     * Initialize the routing table
     */
    router(store, filterActions);

    /**
     * Bind Redux using Redux-Vuex
     */
    connect({
        Vue,
        store,
        actions: {
            ...todoActions
        }
    });

    /**
     * Initialize Vue application and bind to the root element
     */
    new Vue({
        el: '#root',
        components: { todoApp },
        template: '<todo-app></todo-app>'
    });
})();
