import uuid from 'uuid/v4';

export let todos = [
	{
		id: 'f9c94d35-a6d6-4301-9596-76a5b9e2a484',
		title: 'Hello, World!',
		completed: 'true'
	}
];

export const addTodo = function (title) {
	let todo = {
		title,
		id: uuid(),
		completed: false
	};
	todos.push(todo);
};

export const completeTodo = function (id) {
	for (let i = 0; i < todos.length; i++) {
		if (todos[i].id === id) {
			todos[i].completed = !todos[i].completed
		}
	}
};

export const deleteTodo = function (id) {
	for (let i = 0; i < todos.length; i++) {
		if (todos[i].id === id) {
			todos.splice(i, 1);
		}
	}
}