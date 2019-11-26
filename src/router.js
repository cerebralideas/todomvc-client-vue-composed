import page from 'page';

/**
 * @function init - initializes the routes, requires a Redux store and actions
 * @param {Object} store - Redux store
 * @param {Object} actions - Actions related to routing
 */
export default function init(store, { showAll, showActive, showCompleted }) {
	/**
	 * @string - prevents the breaking of the Github page
	 */
	const baseUrl = window.location.pathname;
	/**
	 * @method base - Set the "hashbang" for client-only routing
	 */
	page.base(`${baseUrl}#!`);
	page('/', () => store.dispatch(showAll()));
	page('/show_all', () => store.dispatch(showAll()));
	page('/show_active', () => store.dispatch(showActive()));
	page('/show_completed', () => store.dispatch(showCompleted()));
	page();
};