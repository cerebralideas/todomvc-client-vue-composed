import { todoReducer, todoActions } from './todo-slice';

test('Adds a new todo to todos', () => {
    const newState = todoReducer([], {
        type: todoActions.addTodo,
        payload: 'My new todo'
    });
    expect(newState[0].title).toBe('My new todo');
});
test('Delete a todo from the list', () => {
    const oldState = [
        {
            title: 'My new todo',
            id: 'abcd123',
            completed: false
        }
    ];
    const newState = todoReducer(oldState, {
        type: todoActions.deleteTodo,
        payload: 'abcd123'
    });
    expect(newState.length).toBe(0);
});
