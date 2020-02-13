import { serviceUrl } from '../constants';
import { store, actions } from '../state-mgmt';

const { todoActions } = actions;

export async function sendNewTodo(newTodo) {
    try {
        const response = await fetch(`${serviceUrl}/todos`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: newTodo
            })
        });
        if (response.ok) {
            const newTodo = await response.json();
            store.dispatch(todoActions.addTodo(newTodo));
            return 'success';
        } else {
            console.log(`Service error: ${response.status}.`);
            return 'error';
        }
    } catch (err) {
        console.log(`Error in New Todo fetch: ${err}`);
        return 'error';
    }
}

export async function sendTodoEdit(editType, id) {
    const type = editType === 'complete' ? 'COMPLETE_TODO' : 'DELETE_TODO';
    const method = editType === 'complete' ? 'POST' : 'DELETE';
    try {
        const response = await fetch(`${serviceUrl}/todos/${id}?type=${type}`, {
            method,
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            const action =
                editType === 'complete' ? todoActions.completeTodo : todoActions.deleteTodo;
            store.dispatch(action(id));
            return 'success';
        } else {
            console.log(`Service error: ${response.status}.`);
            return 'error';
        }
    } catch (err) {
        console.log(`Error in Edit Todo fetch: ${err}`);
        return 'error';
    }
}
