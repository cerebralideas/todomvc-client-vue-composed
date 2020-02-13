import { Server } from 'miragejs';

new Server({
    seeds(server) {
        server.db.loadData({
            todos: []
        });
    },
    routes() {
        this.get('http://localhost:3000/', (schema) => {
            return schema.db.todos;
        });
        this.post('http://localhost:3000/todos', (schema, request) => {
            const todo = JSON.parse(request.requestBody);
            todo._id = Date.now().toString();
            todo.completed = false;
            todo.owner = '131d51ee-5888-4474-b96c-3cf44119fb36';

            return schema.db.todos.insert(todo);
        });
        this.post('http://localhost:3000/todos/:id', (schema, request) => {
            const editType = request.queryParams.type;
            if (editType === 'COMPLETE_TODO') {
                return schema.db.todos.update({ _id: request.params.id }, { completed: true });
            } else if (editType === 'DELETE_TODO') {
                return schema.db.todos.remove({ _id: request.params.id });
            } else if (editType === 'COMPLETE_ALL') {
                const todos = JSON.parse(request.requestBody);
                schema.db.todos
                    .filter((x) => todos.includes(x._id))
                    .forEach((x) => x.complete === true);
                return 'success';
            } else if (editType === 'UNCOMPLETE_ALL') {
                const todos = JSON.parse(request.requestBody);
                schema.db.todos
                    .filter((x) => todos.includes(x._id))
                    .forEach((x) => x.complete === false);
                return 'success';
            } else if (editType === 'CLEAR_ALL') {
                return schema.db.todos.remove({ completed: true });
            }
        });
    }
});
