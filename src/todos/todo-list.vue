<script>
import { mapState } from 'redux-vuex';
import todoItem from './todo-item.vue';
import toggleAll from '../bulk-actions/toggle-all.vue';

export default {
    components: {
        todoItem,
        toggleAll
    },
    data: mapState('todos', 'filter'),
    computed: {
        filteredTodos: function() {
            switch (this.filter) {
                case 'show_all':
                    return this.todos;
                case 'show_active':
                    return this.todos.filter((todo) => !todo.completed);
                case 'show_completed':
                    return this.todos.filter((todo) => todo.completed);
                default:
                    return this.todos;
            }
        }
    }
};
</script>

<template>
    <section class="main">
        <toggle-all />
        <ul class="todo-list">
            <todo-item v-for="todo in filteredTodos" :key="todo._id" :todo="todo" />
        </ul>
    </section>
</template>
