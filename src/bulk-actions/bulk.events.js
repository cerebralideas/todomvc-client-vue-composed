import { serviceUrl } from '../constants';
import { store, actions } from '../state-mgmt';

const { todoActions } = actions;

export async function sendBulkAction(editType) {
    const type = editType === 'completeAll' ? 'COMPLETE_ALL' : 'CLEAR_COMPLETED';
    try {
        const response = await fetch(`${serviceUrl}/todos/all?type=${type}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            const action =
                editType === 'completeAll' ? todoActions.toggleAll : todoActions.clearCompleted;
            store.dispatch(action());
            return 'success';
        } else {
            console.log(`Service error: ${response.status}.`);
            return 'error';
        }
    } catch (err) {
        console.log(`Error in Bulk Action fetch: ${err}`);
        return 'error';
    }
}
