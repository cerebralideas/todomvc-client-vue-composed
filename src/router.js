import router from 'page';

/**
 * @function init - initializes the routes, requires a Redux store and actions
 * @param {Object} store - Redux store
 * @param {Object} actions - Actions related to routing
 */
export default function init(store, { showAll, showActive, showCompleted }) {
	router('/', () => store.dispatch(showAll()));
	router('/show_all', () => store.dispatch(showAll()));
	router('/show_active', () => store.dispatch(showActive()));
	router('/show_completed', () => store.dispatch(showCompleted()));
	router();
};