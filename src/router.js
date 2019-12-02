import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';

/**
 * @function init - initializes the routes, requires a Redux store and actions
 * @param {Object} store - Redux store
 * @param {Object} actions - Actions related to routing
 */
export default function init(store, { showAll, showActive, showCompleted }) {
    const router = createRouter([
        { name: 'all', path: '/show_all' },
        { name: 'active', path: '/show_active' },
        { name: 'completed', path: '/show_completed' }
    ]);
    router.usePlugin(browserPlugin({ useHash: true }));
    router.start();
    router.subscribe(({ route }) => {
        switch (route.name) {
            case 'all':
                store.dispatch(showAll());
                break;
            case 'active':
                store.dispatch(showActive());
                break;
            case 'completed':
                store.dispatch(showCompleted());
                break;
        }
    });
}
