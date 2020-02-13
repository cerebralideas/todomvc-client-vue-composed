import { serviceUrl } from '../constants';
import { store, actions } from '../state-mgmt';

const { todoActions } = actions;

export async function sendBulkComplete() {
    const state = store.getState();
    const type = state.todos.every((todo) => todo.completed) ? 'UNCOMPLETE_ALL' : 'COMPLETE_ALL';
    const todos = state.todos
        .filter((todo) => {
            return type === 'UNCOMPLETE_ALL' ? todo.completed : !todo.completed;
        })
        .map((todo) => todo._id);
    try {
        const response = await fetch(`${serviceUrl}/todos/all?type=${type}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todos)
        });
        if (response.ok) {
            store.dispatch(todoActions.toggleAll());
            return 'success';
        } else {
            console.log(`Service error: ${response.status}.`);
            return 'error';
        }
    } catch (err) {
        console.log(`Error in Bulk Complete fetch: ${err}`);
        return 'error';
    }
}
export async function sendBulkClear() {
    const todos = store
        .getState()
        .todos.filter((todo) => todo.completed)
        .map((todo) => todo._id);
    try {
        const response = await fetch(`${serviceUrl}/todos/all?type=CLEAR_ALL`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todos)
        });
        if (response.ok) {
            store.dispatch(todoActions.clearCompleted());
            return 'success';
        } else {
            console.log(`Service error: ${response.status}.`);
            return 'error';
        }
    } catch (err) {
        console.log(`Error in Bulk Clear fetch: ${err}`);
        return 'error';
    }
}
