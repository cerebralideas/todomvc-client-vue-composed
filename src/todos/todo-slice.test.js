import { todoReducer, todoActions } from './todo-slice';

test('Adds a new todo to todos', () => {
    const newState = todoReducer([], {
        type: todoActions.addTodo,
        payload: {
            title: 'My new todo',
            _id: 'abcd123',
            completed: false,
            owner: 'xyz123'
        }
    });
    expect(newState[0].title).toBe('My new todo');
});
test('Delete a todo from the list', () => {
    const oldState = [
        {
            title: 'My new todo',
            _id: 'abcd123',
            completed: false,
            owner: 'xyz123'
        }
    ];
    const newState = todoReducer(oldState, {
        type: todoActions.deleteTodo,
        payload: 'abcd123'
    });
    expect(newState.length).toBe(0);
});
