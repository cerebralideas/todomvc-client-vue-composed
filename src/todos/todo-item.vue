<script>
import { mapActions } from 'redux-vuex';

export default {
    props: { todo: Object },
    methods: mapActions('completeTodo', 'deleteTodo')
};
</script>

<template>
    <li :class="todo.completed ? 'completed' : ''">
        <div class="view">
            <input
                :id="todo.id"
                class="toggle"
                type="checkbox"
                :checked="todo.completed"
                @change="completeTodo(todo.id)"
            />
            <label :for="todo.id">
                {{ todo.title }}
            </label>
            <button class="destroy" @click="deleteTodo(todo.id)">
                <span class="a11y-text">Delete todo</span>
            </button>
        </div>
    </li>
</template>
