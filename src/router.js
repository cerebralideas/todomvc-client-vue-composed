import router from 'page';

export default function (store, { showAll, showActive, showCompleted }) {
	router('/', () => store.dispatch(showAll()));
	router('/show_all', () => store.dispatch(showAll()));
	router('/show_active', () => store.dispatch(showActive()));
	router('/show_completed', () => store.dispatch(showCompleted()));
	router();
};